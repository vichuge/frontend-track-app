import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import api from '../api/client';
import { logout } from './authSlice';
import { isUnauthorized, toRejectValue } from './thunkHelpers';

export const fetchRecords = createAsyncThunk(
  'records/fetch',
  async (_, { getState, rejectWithValue }) => {
    try {
      return await api.getRecords(getState().auth.token);
    } catch (error) {
      return rejectWithValue(toRejectValue(error));
    }
  },
  { condition: (_, { getState }) => getState().records.status !== 'loading' },
);

export const createRecord = createAsyncThunk(
  'records/create',
  async ({ listId, times }, { getState, rejectWithValue }) => {
    try {
      return await api.createRecord(getState().auth.token, { listId, times });
    } catch (error) {
      return rejectWithValue(toRejectValue(error));
    }
  },
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  createStatus: 'idle',
  createError: null,
};

const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    resetCreateStatus: (state) => {
      state.createStatus = 'idle';
      state.createError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecords.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecords.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.items = payload;
      })
      .addCase(fetchRecords.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload?.message ?? 'Could not load your records.';
      })
      .addCase(createRecord.pending, (state) => {
        state.createStatus = 'loading';
        state.createError = null;
      })
      .addCase(createRecord.fulfilled, (state, { payload }) => {
        state.createStatus = 'succeeded';
        state.items.push(payload);
      })
      .addCase(createRecord.rejected, (state, { payload }) => {
        state.createStatus = 'failed';
        state.createError = payload?.message ?? 'Could not save the record.';
      })
      .addCase(logout, () => initialState)
      .addMatcher(isUnauthorized, () => initialState);
  },
});

export const { resetCreateStatus } = recordsSlice.actions;

export const selectRecordsState = (state) => state.records;

/** Records sorted newest first (the API returns them oldest first). */
export const selectSortedRecords = createSelector(
  (state) => state.records.items,
  (items) => [...items].sort((a, b) => new Date(b.date_added) - new Date(a.date_added)),
);

export default recordsSlice.reducer;
