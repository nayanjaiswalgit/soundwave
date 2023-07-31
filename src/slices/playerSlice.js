import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/spotifyAPI";

const initialState = {
  tracks: [],
  trackNo: 0,
  currentPlaying: null,
  previous: [],
  isLoading: false,
  isError: null,
  tracker: 0,
  isPlaying: true,
};

export const fetchTrack = createAsyncThunk("user/playerSlice", async (url) => {
  const Data = await fetchData(url);
  return Data;
});

const playerSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    add(state, action) {
      state.currentPlaying = action.payload;
      state.previous.push(action.payload);
      state.tracker = state.previous.length - 1;
      state.tracks = [];
    },
    next(state) {
      if (state.tracker + 1 < state.previous.length) {
        state.tracker += 1;
        state.currentPlaying = state.previous[state.tracker];
      } else if (state.trackNo + 1 < state.tracks.length) {
        state.trackNo += 1;
        state.previous.push(state.tracks[state.trackNo].track);
        state.currentPlaying = state.tracks[state.trackNo].track;
        state.tracker = state.previous.length - 1;
      }
    },
    prev(state) {
      if (state.previous.length > 1 && state.tracker > 0) {
        state.tracker -= 1;
        state.currentPlaying = state.previous[state.tracker];
      } else if (state.trackNo > 0) {
        state.trackNo -= 1;
        state.currentPlaying = state.tracks[state.trackNo].track;
        state.previous.push(state.currentPlaying);
        state.tracker = state.previous.length - 1;
      }
    },
    play(state) {
      state.isPlaying = !state.isPlaying;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrack.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTrack.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tracks = action.payload.tracks.items;
        state.trackNo = 0;
        state.currentPlaying = action.payload.tracks.items[0].track;
        state.previous.push(action.payload.tracks.items[0].track);
        state.tracker = state.previous.length - 1;
      })
      .addCase(fetchTrack.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default playerSlice.reducer;
export const { add, next, prev, play } = playerSlice.actions;
