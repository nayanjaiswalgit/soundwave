import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api/spotifyAPI";
const initialState = {
  tracks: [],
  currentPlaying: [],
  isLoading: false,
  isError: null,
  tracker: 0,
  isPlaying: true,
};

export const fetchTrack = createAsyncThunk("user/playerSlice", async (url) => {
 
  const Data = fetchData(url);

  return Data;
});

const playerSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    add(state, action) {
      
      state.currentPlaying.push(action.payload);
      state.tracker = state.currentPlaying.length - 1;
    },
    next(state) {
      if (state.tracker < state.tracks.length) {
        state.currentPlaying.push(state.tracks[state.tracker]);
        state.tracker = state.tracker + 1;
      }
    },
    prev(state) {
      if (state.tracker > state.currentPlaying.length) {
        state.tracker = state.tracker - 1;
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
        state.tracker = state.tracker + 1;
        state.isLoading = true;
        state.tracks = action.payload.tracks.items;
        state.currentPlaying[state.tracker] = action.payload.tracks.items[state.tracker].track ;
       
      })
      .addCase(fetchTrack.rejected, (state, action) => {
        state.isLoading = false;
         state.isError = action.error.message;
      });
  },
});

export default playerSlice.reducer;
export const { add, next, prev, play } = playerSlice.actions;
