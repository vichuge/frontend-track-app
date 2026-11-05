/**
 * Safe JSON wrapper around localStorage. Every access is guarded because
 * storage can throw (private mode, blocked cookies, quota exceeded).
 */
const storage = {
  get(key) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage unavailable: the app keeps working in memory only.
    }
  },
  remove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Ignore: nothing to clean up.
    }
  },
};

export default storage;
