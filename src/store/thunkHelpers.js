/** Serializable payload for `rejectWithValue` built from an `ApiError`. */
export const toRejectValue = (error) => ({
  status: error?.status ?? 0,
  message: error?.message || 'Something went wrong. Please try again.',
});

/** Matches any rejected thunk whose API call returned 401 Unauthorized. */
export const isUnauthorized = (action) => (
  action.type.endsWith('/rejected') && action.payload?.status === 401
);
