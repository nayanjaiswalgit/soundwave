import { createSlice } from '@reduxjs/toolkit';
const   initialState = {
  profile: null,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchProfileStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchProfileSuccess(state, action) {
      state.profile = action.payload;
      state.isLoading = true;
    },
    fetchProfileFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure } = userSlice.actions;

export default userSlice.reducer;
