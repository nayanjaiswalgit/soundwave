import "./App.css";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import RootLayout from "./components/navigation/RootLayout";
import { useEffect } from "react";
import { fetchUserProfile } from "./features/user/userSlice";
import { useDispatch } from "react-redux";

import NotFoundPage from "./components/NotFoundPage";
import { getAccessTokenFromRefreshToken } from "../AuthorizationPage";

const user = true;
function App() {
  const getTokenFromStorage = () => localStorage.getItem("token");
  const getRefreshTokenFromStorage = () => localStorage.getItem("refresh_token");

  function useAuth() {
    const token = getTokenFromStorage () ;
    const refreshToken = getRefreshTokenFromStorage () ;

    if (user) {

      return true;
    }
    else if (token && refreshToken ) {
      getAccessTokenFromRefreshToken(refreshToken);


    }
    else {
      return false
    }
  }

  function PrivateOutlet() {
    const auth = useAuth();
    return auth ? <RootLayout /> : <Navigate to="/login" />;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const token = getTokenFromStorage();

    dispatch(fetchUserProfile());

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
