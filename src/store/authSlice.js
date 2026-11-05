import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/client';
import { loadSession } from './session';
import { isUnauthorized, toRejectValue } from './thunkHelpers';

const authenticate = (type, call) => createAsyncThunk(
  type,
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { id, username: name, token } = await call(username.trim(), password);
      return { user: { id, username: name }, token };
    } catch (error) {
      return rejectWithValue(toRejectValue(error));
    }
  },
);

export const login = authenticate('auth/login', api.login);
export const signUp = authenticate('auth/signUp', api.register);

const anonymous = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

export const getInitialAuthState = () => {
  const session = loadSession();
  return session ? { ...anonymous, ...session } : anonymous;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: anonymous,
  reducers: {
    logout: () => anonymous,
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    [login, signUp].forEach((thunk) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(thunk.fulfilled, (state, { payload }) => ({
          ...state, ...payload, status: 'idle', error: null,
        }))
        .addCase(thunk.rejected, (state, { payload }) => {
          state.status = 'failed';
          state.error = payload?.message ?? 'Something went wrong. Please try again.';
        });
    });
    builder.addMatcher(isUnauthorized, (state, action) => {
      if (action.type.startsWith('auth/')) return state;
      return { ...anonymous, error: 'Your session has expired. Please log in again.' };
    });
  },
});

export const { logout, clearAuthError } = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const selectToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => Boolean(state.auth.token);

export default authSlice.reducer;
