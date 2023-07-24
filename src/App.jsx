import "./App.css";
import {
  Route,
  Navigate,
  BrowserRouter,
  Routes,
  
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import RootLayout from "./components/navigation/RootLayout";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import NotFoundPage from "./components/NotFoundPage";
import {

  getAccessTokenFromRefreshToken,
} from "../AuthorizationPage";
import { UserProfile} from "./features/authSlice";
import { fetchThisWeekSongs } from "./features/track/trackSlice";
import { fetchPlaylist } from "./features/playlist/PlaylistSlice";

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
   loginflow()
    
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
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
