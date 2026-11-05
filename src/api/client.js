/**
 * Single entry point for talking to the Track water API.
 *
 * By default every call is served by the bundled mock server, so the app
 * runs with zero external dependencies. Set `VITE_API_URL` (e.g.
 * `https://my-backend.example.com/api/v1`) to hit a real backend that
 * implements the same contract instead.
 */
import ApiError from './ApiError';
import mockRequest from './mockServer';

const API_URL = import.meta.env.VITE_API_URL;

export const isMockApi = !API_URL;

const httpRequest = async (method, path, { body, headers } = {}) => {
  let response;
  try {
    response = await fetch(`${API_URL.replace(/\/$/, '')}${path}`, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(0, 'Unable to reach the server. Check your connection and try again.');
  }
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new ApiError(response.status, data?.error || response.statusText);
  return { status: response.status, data };
};

const request = isMockApi ? mockRequest : httpRequest;

const auth = (token) => ({ Authorization: token });

const api = {
  login: async (username, password) => (
    await request('POST', '/authentication', { body: { username, password } })
  ).data,

  register: async (username, password) => (
    await request('POST', '/users', { body: { user: { username, password } } })
  ).data,

  getLists: async (token) => (await request('GET', '/lists', { headers: auth(token) })).data,

  getRecords: async (token) => (await request('GET', '/records', { headers: auth(token) })).data,

  createRecord: async (token, { listId, times }) => (
    await request('POST', '/records', { headers: auth(token), body: { list_id: listId, times } })
  ).data,
};

export default api;
