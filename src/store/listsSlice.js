import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/client';
import { logout } from './authSlice';
import { isUnauthorized, toRejectValue } from './thunkHelpers';

export const fetchLists = createAsyncThunk(
  'lists/fetch',
  async (_, { getState, rejectWithValue }) => {
    try {
      return await api.getLists(getState().auth.token);
    } catch (error) {
      return rejectWithValue(toRejectValue(error));
    }
  },
  {
    // Drinks never change during a session: fetch them once.
    condition: (_, { getState }) => !['loading', 'succeeded'].includes(getState().lists.status),
  },
);

const initialState = { items: [], status: 'idle', error: null };

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchLists.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.items = payload;
      })
      .addCase(fetchLists.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload?.message ?? 'Could not load drinks.';
      })
      .addCase(logout, () => initialState)
      .addMatcher(isUnauthorized, () => initialState);
  },
});

export const selectLists = (state) => state.lists;
export const selectListById = (id) => (state) => state.lists.items
  .find((list) => list.id === Number(id));

export default listsSlice.reducer;
