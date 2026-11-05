/**
 * In-browser "database" used by the mock API.
 *
 * - Seeds come from `src/mocks/*.json` (same shape as the Rails tables).
 * - Mutable tables (users, records) are persisted in localStorage so the
 *   demo survives page reloads. Lists are static, like the real backend.
 * - Seed records use `days_ago` + `time` instead of fixed timestamps so the
 *   demo always shows recent activity.
 */
import seedUsers from '../mocks/users.json';
import seedLists from '../mocks/lists.json';
import seedRecords from '../mocks/records.json';
import storage from '../utils/storage';

export const DB_STORAGE_KEY = 'track-water:mock-db:v1';

const resolveSeedDate = ({ days_ago: daysAgo, time }, index, now) => {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date(now);
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hours, minutes, 0, 0);
  // A seed scheduled "later today" would be in the future: pull it a few
  // minutes into the past, keeping the seed order intact.
  if (date > now) return new Date(now.getTime() - (seedRecords.length - index) * 60000);
  return date;
};

const buildSeed = (now = new Date()) => ({
  users: seedUsers.map((user) => ({ ...user, created_at: now.toISOString() })),
  records: seedRecords.map((seed, index) => ({
    id: seed.id,
    user_id: seed.user_id,
    list_id: seed.list_id,
    times: seed.times,
    created_at: resolveSeedDate(seed, index, now).toISOString(),
  })),
});

let cache = null;

const persist = () => storage.set(DB_STORAGE_KEY, cache);

const load = () => {
  if (cache) return cache;
  const stored = storage.get(DB_STORAGE_KEY);
  const valid = stored && Array.isArray(stored.users) && Array.isArray(stored.records);
  cache = valid ? stored : buildSeed();
  if (!valid) persist();
  return cache;
};

const nextId = (rows) => rows.reduce((max, row) => Math.max(max, row.id), 0) + 1;

export const db = {
  lists: () => seedLists,
  findList: (id) => seedLists.find((list) => list.id === Number(id)),

  findUserById: (id) => load().users.find((user) => user.id === Number(id)),
  findUserByUsername: (username) => load().users
    .find((user) => user.username.toLowerCase() === String(username).trim().toLowerCase()),
  insertUser: ({ username, password }) => {
    const data = load();
    const user = {
      id: nextId(data.users),
      username: username.trim(),
      password,
      created_at: new Date().toISOString(),
    };
    data.users.push(user);
    persist();
    return user;
  },

  recordsForUser: (userId) => load().records.filter((record) => record.user_id === Number(userId)),
  insertRecord: ({ userId, listId, times }) => {
    const data = load();
    const record = {
      id: nextId(data.records),
      user_id: Number(userId),
      list_id: Number(listId),
      times: Number(times),
      created_at: new Date().toISOString(),
    };
    data.records.push(record);
    persist();
    return record;
  },
};

/** Restores the original seed data (used by "Reset demo data" and tests). */
export const resetDb = () => {
  cache = buildSeed();
  persist();
};
