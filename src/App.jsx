import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Sidebar from "./components/Sidebar";

function App() {
  const login = true ;
  return (
    <div className="h-screen flex">
      <BrowserRouter>
      {login && <Sidebar />}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
