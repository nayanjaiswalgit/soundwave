import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/spotifyAPI";

const initialState = {
    searchResult : [],
    isLoading : false,
    error : null ,
}

export const  searchSong = createAsyncThunk(
    'song/search', async(url)=>{
   
        const data = fetchData(url)
       
      return data;
      }
)
const searchSlice = createSlice({
    name : "search", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(searchSong.pending, (state) => {
            state.isLoading = true;
            state.error = false;
          })
          .addCase(searchSong.fulfilled, (state, action) => {

            state.isLoading = false;
            state.searchResult = action.payload;
     
          })
          .addCase(searchSong.rejected, (state, action) => {
            (state.isLoading = false), (state.error = action.error.message);
          });
      },
})

export default searchSlice.reducer ; 