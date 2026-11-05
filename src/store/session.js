import storage from '../utils/storage';

export const SESSION_STORAGE_KEY = 'track-water:session';

/** Reads `{ user, token }` saved by the last successful login, if any. */
export const loadSession = () => {
  const session = storage.get(SESSION_STORAGE_KEY);
  if (!session?.token || !session?.user) return null;
  return session;
};

export const saveSession = (session) => {
  if (session?.token) storage.set(SESSION_STORAGE_KEY, session);
  else storage.remove(SESSION_STORAGE_KEY);
};
