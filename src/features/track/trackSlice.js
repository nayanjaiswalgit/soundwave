import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api/spotifyAPI";

const initialState = {
    songs : [],
    isLoading : false,
    error : null ,
}

export const  fetchThisWeekSongs = createAsyncThunk(
    'song/fetchThisWeekSongs', async(url)=>{
      console.log("fetch");
        const data = fetchData(url)
      return data;
      }
)
const trackSlice = createSlice({
    name : "Playlist Track", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchThisWeekSongs.pending, (state) => {
            state.isLoading = true;
            state.error = false;
          })
          .addCase(fetchThisWeekSongs.fulfilled, (state, action) => {

            console.log(action.payload)
            state.isLoading = true;
            state.songs = action.payload;
          })
          .addCase(fetchThisWeekSongs.rejected, (state, action) => {
            (state.isLoading = false), (state.error = action.error.message);
          });
      },
})

export default trackSlice.reducer ; 