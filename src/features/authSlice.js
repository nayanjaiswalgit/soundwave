import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/spotifyAPI";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
};
export const UserProfile = createAsyncThunk(
    'user/auth',
    async () => {
    return fetchData("https://api.spotify.com/v1/me")
    }
  );
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    LogOut(state) {
      (state.isAuthenticated = false),
        (state.user = null),
        (state.token = null),
        localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserProfile.pending, (state) => {
       
        state.error = null;

      })
      .addCase(UserProfile.fulfilled, (state, action) => {
      
        state.user = action.payload;
     
        state.isAuthenticated = true
      })
      .addCase(UserProfile.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const { loginSuccess, LogOut } = authSlice.actions;
