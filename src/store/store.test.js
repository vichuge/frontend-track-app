import { setupStore } from '.';
import { login, logout, signUp } from './authSlice';
import { fetchLists } from './listsSlice';
import { createRecord, fetchRecords, selectSortedRecords } from './recordsSlice';
import { SESSION_STORAGE_KEY } from './session';

const demo = { username: 'vichuge@mail.com', password: 'admin1234' };

describe('store', () => {
  it('logs in, persists the session and clears it on logout', async () => {
    const store = setupStore();
    await store.dispatch(login(demo));
    expect(store.getState().auth.user).toEqual({ id: 1, username: demo.username });
    expect(JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY)).token).toBe(store.getState().auth.token);

    store.dispatch(logout());
    expect(store.getState().auth.token).toBeNull();
    expect(localStorage.getItem(SESSION_STORAGE_KEY)).toBeNull();
  });

  it('restores a saved session on startup', async () => {
    const first = setupStore();
    await first.dispatch(login(demo));
    const second = setupStore();
    expect(second.getState().auth.user.username).toBe(demo.username);
  });

  it('exposes API errors as messages', async () => {
    const store = setupStore();
    await store.dispatch(login({ username: 'ghost', password: 'whatever' }));
    expect(store.getState().auth).toMatchObject({ status: 'failed', error: 'No such user', token: null });

    await store.dispatch(signUp(demo));
    expect(store.getState().auth.error).toBe('Username has already been taken');
  });

  it('loads lists once and keeps records sorted newest first', async () => {
    const store = setupStore();
    await store.dispatch(login(demo));
    await store.dispatch(fetchLists());
    await store.dispatch(fetchLists());
    expect(store.getState().lists.status).toBe('succeeded');

    await store.dispatch(fetchRecords());
    const created = await store.dispatch(createRecord({ listId: 1, times: 2 }));
    expect(selectSortedRecords(store.getState())[0].id).toBe(created.payload.id);
  });

  it('logs out with a message when the token is rejected', async () => {
    const store = setupStore({
      auth: {
        user: { id: 1, username: 'x' }, token: 'expired.token.value', status: 'idle', error: null,
      },
    });
    await store.dispatch(fetchRecords());
    expect(store.getState().auth.token).toBeNull();
    expect(store.getState().auth.error).toMatch(/session has expired/);
    expect(store.getState().records.items).toEqual([]);
  });
});
