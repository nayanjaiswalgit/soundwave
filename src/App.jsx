import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Search from "./components/Search";
import RootLayout from "./components/navigation/RootLayout";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import NotFoundPage from "./components/NotFoundPage";
import { UserProfile, refreshAccessTokenAsync } from "./slices/authSlice";
import { fetchThisWeekSongs } from "./slices/trackSlice";
import { fetchPlaylist } from "./slices/playlistSlice";

import PlaylistPage from "./components/PlaylistPage";

function App() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");

  function useAuth() {
    if (token ) {
      return true;
    }
    return false;
  }

  function PrivateOutlet() {
    const auth = useAuth();
    return auth ? <RootLayout /> : <Navigate to="/login" />;
  }

  useEffect(() => {
    const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
    if (token && tokenExpirationTime) {
      const expirationTime = parseInt(tokenExpirationTime, 10);
      if (Date.now() >= expirationTime) {
        dispatch(refreshAccessTokenAsync());
        console.log("Timeout");
      } else {
        console.log("Timehai");

        dispatch(UserProfile());
        dispatch(fetchPlaylist());
        dispatch(fetchThisWeekSongs());
      }
    }

    return () => {};
  }, [token,dispatch]);
console.log("app render")
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
