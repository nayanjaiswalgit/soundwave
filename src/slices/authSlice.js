import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/spotifyAPI";
import { getAccessTokenFromRefreshToken } from "../utils/AuthorizationPage";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

export const UserProfile = createAsyncThunk("user/auth", async () => {
  return fetchData("https://api.spotify.com/v1/me");
});

export const refreshAccessTokenAsync = createAsyncThunk(
  "user/refreshToken",
  async () => {
    return getAccessTokenFromRefreshToken();
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      console.log(action.payload);
      state.user = action.payload.user;
      state.error = false;
      state.isLoading = false;
    },
    LogOut(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserProfile.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(UserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(UserProfile.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(refreshAccessTokenAsync.fulfilled, (state) => {
        state.isAuthenticated = true;

        state.isLoading = false;
      })
      .addCase(refreshAccessTokenAsync.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.isLoading = false;
        localStorage.clear();
      });
  },
});

export default authSlice.reducer;
export const { loginSuccess, LogOut } = authSlice.actions;
