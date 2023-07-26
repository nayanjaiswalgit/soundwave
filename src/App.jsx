
import {
  Route,
  Navigate,
  BrowserRouter,
  Routes,
  
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Search from "./components/Search";
import RootLayout from "./components/navigation/RootLayout";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import NotFoundPage from "./components/NotFoundPage";
import {

  getAccessTokenFromRefreshToken,
} from "./utils/AuthorizationPage";
import { UserProfile} from "./slices/authSlice";
import { fetchThisWeekSongs } from "./slices/trackSlice";
import { fetchPlaylist } from "./slices/playlistSlice";

import PlaylistPage from "./components/PlaylistPage";

function App() {

  const user = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
 
  let token = localStorage.getItem("token");
 
  const loginflow = () => {
    token = localStorage.getItem("token");
    const refresh_token = localStorage.getItem("refresh_token");

    if(token && !user.href){
      console.log("flow is working")
      getAccessTokenFromRefreshToken(refresh_token);
      dispatch(UserProfile());
    }
    console.log("failed")
  }
  
  function useAuth() {
  
    if ( token ) {
      console.log(user)
      return true;
    }
    return false;
  }

  function PrivateOutlet() {
    const auth = useAuth();
    return auth ? <RootLayout /> : <Navigate to="/login" />;
  }

  useEffect(() => {

     dispatch(UserProfile());
    dispatch(fetchPlaylist());
    dispatch(fetchThisWeekSongs());

 
    return () => {};
  }, []);

  return (
    <div className="h-screen flex max-w-screen overflow-hidden">
      <BrowserRouter>
        <Routes element={<RootLayout />}>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="search" element={<Search />} />
            <Route path="playlist" element={<PlaylistPage />} />
          </Route>
  
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
