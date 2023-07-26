import { combineReducers } from "redux";


import trackSlice from "../slices//trackSlice";
import playerSlice from "../slices/playerSlice";
import authSlice from "../slices/authSlice";
import searchSlice from "../slices/searchSlice";
import playlistSlice from "../slices/playlistSlice";


const rootReducer = combineReducers ({
  
    playlist :playlistSlice ,
    Weak_Song : trackSlice,
    track : playerSlice,
    auth:authSlice,
    searchSong : searchSlice ,


})
export default rootReducer ;