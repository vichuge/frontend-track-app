import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer, { getInitialAuthState } from './authSlice';
import listsReducer from './listsSlice';
import recordsReducer from './recordsSlice';
import { saveSession } from './session';

const rootReducer = combineReducers({
  auth: authReducer,
  lists: listsReducer,
  records: recordsReducer,
});

/**
 * Creates the Redux store. Pass `preloadedState` in tests; in the app the
 * auth slice is hydrated from the session saved in localStorage.
 */
export const setupStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState ?? { auth: getInitialAuthState() },
  });

  let lastToken = store.getState().auth.token;
  store.subscribe(() => {
    const { user, token } = store.getState().auth;
    if (token === lastToken) return;
    lastToken = token;
    saveSession(token ? { user, token } : null);
  });

  return store;
};

export default setupStore;
