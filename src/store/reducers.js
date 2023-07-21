import { combineReducers } from "redux";
import userReducer from '../features/user/userSlice'
import PlaylistSlice from "../features/playlist/PlaylistSlice";
import trackSlice from "../features/track/trackSlice";


const rootReducer = combineReducers ({
    user:userReducer ,
    playlist :PlaylistSlice ,
    song : trackSlice


})
export default rootReducer ;