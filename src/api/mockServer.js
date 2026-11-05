/**
 * Mock implementation of the Track water REST API (`/api/v1`).
 *
 * Each handler mirrors a Rails controller action from
 * https://github.com/vichuge/backend-track-app (branch `start-api`):
 * same routes, request bodies, status codes and JSON representers.
 */
import ApiError from './ApiError';
import { db } from './mockDb';
import { createToken, verifyToken } from './mockToken';

const LATENCY_MS = import.meta.env.MODE === 'test' ? 0 : 350;

const wait = (ms) => new Promise((resolve) => { setTimeout(resolve, ms); });

// --- Representers (same JSON as app/representers/*.rb) ---------------------
const userJson = (user) => ({
  id: user.id,
  username: user.username,
  token: createToken(user.id),
});

const listJson = ({ id, title, icon }) => ({ id, title, icon });

const recordJson = (record) => {
  const list = db.findList(record.list_id);
  return {
    id: record.id,
    times: record.times,
    list: list.title,
    icon: list.icon,
    date_added: record.created_at,
    user_id: record.user_id,
  };
};

// --- Helpers ----------------------------------------------------------------
const currentUser = (headers = {}) => {
  const userId = verifyToken(headers.Authorization);
  const user = userId && db.findUserById(userId);
  if (!user) throw new ApiError(401, 'Not Authorized');
  return user;
};

const userValidationError = ({ username = '', password = '' }) => {
  if (!username.trim()) return "Username can't be blank";
  if (username.trim().length < 3) return 'Username is too short (minimum is 3 characters)';
  if (db.findUserByUsername(username)) return 'Username has already been taken';
  if (!password) return "Password can't be blank";
  if (password.length < 6) return 'Password is too short (minimum is 6 characters)';
  return null;
};

// --- Routes -----------------------------------------------------------------
const routes = {
  // UsersController#create
  'POST /users': ({ body }) => {
    const params = body?.user;
    if (!params) throw new ApiError(422, 'param is missing or the value is empty: user');
    const error = userValidationError(params);
    if (error) throw new ApiError(422, error);
    return { status: 201, data: userJson(db.insertUser(params)) };
  },

  // AuthenticationController#create
  'POST /authentication': ({ body = {} }) => {
    if (!body.username) throw new ApiError(422, 'param is missing or the value is empty: username');
    const user = db.findUserByUsername(body.username);
    if (!user) throw new ApiError(401, 'No such user');
    if (user.password !== body.password) throw new ApiError(401, 'Incorrect password');
    return { status: 201, data: userJson(user) };
  },

  // ListsController#index
  'GET /lists': ({ headers }) => {
    currentUser(headers);
    return { status: 200, data: db.lists().map(listJson) };
  },

  // RecordsController#index
  'GET /records': ({ headers }) => {
    const user = currentUser(headers);
    return { status: 200, data: db.recordsForUser(user.id).map(recordJson) };
  },

  // RecordsController#create
  'POST /records': ({ headers, body = {} }) => {
    const user = currentUser(headers);
    const times = Number(body.times);
    if (!Number.isInteger(times) || times < 1) throw new ApiError(422, "Times can't be blank");
    if (!db.findList(body.list_id)) throw new ApiError(422, 'List must exist');
    const record = db.insertRecord({ userId: user.id, listId: body.list_id, times });
    return { status: 201, data: recordJson(record) };
  },
};

/**
 * Resolves like an HTTP call: `{ status, data }` on success, throws
 * `ApiError` otherwise. Responses are deep-copied so callers can never
 * mutate the mock database by accident.
 */
const mockRequest = async (method, path, { body, headers } = {}) => {
  await wait(LATENCY_MS);
  const handler = routes[`${method} ${path}`];
  if (!handler) throw new ApiError(404, `No route matches [${method}] "${path}"`);
  const { status, data } = handler({ body, headers });
  return { status, data: structuredClone(data) };
};

export default mockRequest;
