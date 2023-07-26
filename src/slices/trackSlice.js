import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/spotifyAPI";

const initialState = {
    songs : [],
    isLoading : false,
    error : null ,
}

export const  fetchThisWeekSongs = createAsyncThunk(
    'song/fetchThisWeekSongs', async()=>{
   
        const data = fetchData('https://api.spotify.com/v1/playlists/37i9dQZF1DX5cZuAHLNjGz/tracks?limit=5')
     
      return data;
      }
)
const trackSlice = createSlice({
    name : "Weak_Song", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchThisWeekSongs.pending, (state) => {
            state.isLoading = true;
            state.error = false;
          })
          .addCase(fetchThisWeekSongs.fulfilled, (state, action) => {

         
            state.isLoading = true;
            state.songs = action.payload;
          })
          .addCase(fetchThisWeekSongs.rejected, (state, action) => {
            (state.isLoading = false), (state.error = action.error.message);
          });
      },
})

export default trackSlice.reducer ; 