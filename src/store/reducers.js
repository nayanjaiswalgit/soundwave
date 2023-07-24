import { combineReducers } from "redux";
import userReducer from '../features/user/userSlice'
import PlaylistSlice from "../features/playlist/PlaylistSlice";
import trackSlice from "../features/track/trackSlice";
import playerSlice from "../features/player/playerSlice";
import authSlice from "../features/authSlice";
import searchSlice from "../features/searchSlice";


const rootReducer = combineReducers ({
    user:userReducer ,
    playlist :PlaylistSlice ,
    Weak_Song : trackSlice,
    track : playerSlice,
    auth:authSlice,
    searchSong : searchSlice ,


})
export default rootReducer ;