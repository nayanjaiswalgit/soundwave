import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api/spotifyAPI";
const initialState  = {
    tracks : [],
    isLoading : false,
    isError : null 
}

export const fetchTrack = createAsyncThunk(
    'user/playerSlice',
    async () => {
        const fetchDataa = fetchData('https://api.spotify.com/v1/playlists/37i9dQZF1E35FO15FA5gXp')

      return fetchDataa
    
    }
  );




const playerSlice = createSlice({
    name:"track",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchTrack.pending, (state) => {
            state.isLoading = true;
            state.error = false;
          })
          .addCase(fetchTrack.fulfilled, (state, action) => {

           
            state.isLoading = true;
            state.tracks = action.payload;
          })
          .addCase(fetchTrack.rejected, (state, action) => {
            (state.isLoading = false), (state.error = action.error.message);
          });
      },
    
})

export default playerSlice.reducer ; 