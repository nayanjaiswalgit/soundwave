import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Search from "./components/Search";
import RootLayout from "./components/navigation/RootLayout";

import { useSelector } from "react-redux";
import NotFoundPage from "./components/NotFoundPage";

import PlaylistPage from "./components/PlaylistPage";
import { sessionHandler } from "./utils/AuthorizationPage";

function App() {
  const user = useSelector((state) => state.auth.isAuthenticated);

  function PrivateOutlet() {
    return user ? <RootLayout /> : <Navigate to="/login" />;
  }

  sessionHandler();

  return (
    <div className="h-screen flex max-w-screen overflow-hidden">
      <BrowserRouter>
        <Routes element={<RootLayout />}>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="home" exact element={<Home />} />
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
