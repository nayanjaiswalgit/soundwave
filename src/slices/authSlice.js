import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/spotifyAPI";
import { getAccessTokenFromRefreshToken } from "../utils/AuthorizationPage";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
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
      state.user = action.payload.user;
      state.token = action.payload.token;
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
      })
      .addCase(UserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;

        if (action.payload.expires_in) {
          const expirationTime = Date.now() + action.payload.expires_in * 1000;

          localStorage.setItem("tokenExpirationTime", expirationTime);
        }
      })
      .addCase(UserProfile.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
      })
      .addCase(refreshAccessTokenAsync.fulfilled, (state, action) => {
        
        state.token = action.payload.token;
        
        if (action.payload.expires_in) {
          const expirationTime = Date.now() + action.payload.expires_in * 1000;
          localStorage.setItem("tokenExpirationTime", expirationTime);
        }
      })
      .addCase(refreshAccessTokenAsync.rejected, (state, ) => {
       
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.clear();
      });
  },
});

export default authSlice.reducer;
export const { loginSuccess, LogOut } = authSlice.actions;


export const checkTokenExpiration = () => (dispatch, getState) => {
  const { token } = getState().auth;
  const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");

  if (token && tokenExpirationTime) {
    const expirationTime = parseInt(tokenExpirationTime, 10);
    if (Date.now() >= expirationTime) {
      dispatch(refreshAccessTokenAsync());
    }
  }
};
