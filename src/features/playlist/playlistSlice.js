import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api/spotifyAPI";

const initialState = {
  playlists: [],
  isLoading: false,
  error: null,
};


export const fetchPlaylist = createAsyncThunk("player/playlist", async () => {
  return fetchData("https://api.spotify.com/v1/browse/featured-playlists");
});

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylist.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPlaylist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.playlists.push(action);
      })
      .addCase(fetchPlaylist.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.error.message);
      });
  },
});
export default playlistSlice.reducer;
