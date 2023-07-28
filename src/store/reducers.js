import { combineReducers } from "redux";


import playerSlice from "../slices/playerSlice";
import authSlice from "../slices/authSlice";
import searchSlice from "../slices/searchSlice";
import playlistSlice from "../slices/playlistSlice";


const rootReducer = combineReducers ({
  
    playlist :playlistSlice ,
    track : playerSlice,
    auth:authSlice,
    searchSong : searchSlice ,


})
export default rootReducer ;