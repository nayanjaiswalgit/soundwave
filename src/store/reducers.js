import { combineReducers } from "redux";
import userReducer from '../features/user/userSlice'
import PlaylistSlice from "../features/playlist/PlaylistSlice";
import trackSlice from "../features/track/trackSlice";
import playerSlice from "../features/player/playerSlice";


const rootReducer = combineReducers ({
    user:userReducer ,
    playlist :PlaylistSlice ,
    song : trackSlice,
    track : playerSlice,


})
export default rootReducer ;