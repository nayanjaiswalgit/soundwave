import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/spotifyAPI";

const initialState = {
  songs:[],
  playlists: [],
  isLoading: false,
  error: null,
};

export const fetchPlaylist = createAsyncThunk("player/playlist", async () => {
  return fetchData("https://api.spotify.com/v1/browse/featured-playlists");
});

export const fetchThisWeekSongs = createAsyncThunk(
  "song/fetchThisWeekSongs",
  async () => {
    const data = fetchData(
      "https://api.spotify.com/v1/playlists/37i9dQZF1DX5cZuAHLNjGz/tracks?limit=5"
    );

    return data;
  }
);
const PlaylistSlice = createSlice({
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
        state.playlists = action.payload.playlists.items;
      })
      .addCase(fetchPlaylist.rejected, (state, action) => {
        state.isLoading = false;
         state.error = action.error.message;
      })
      .addCase(fetchThisWeekSongs.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchThisWeekSongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.songs = action.payload;
      })
      .addCase(fetchThisWeekSongs.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.error.message);
      });
  },
});
export default PlaylistSlice.reducer;
