import "./App.css";
import {

  Route,
  createBrowserRouter,

  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import RootLayout from "./components/rootLayout";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route  element={<RootLayout/>}>
        <Route path="/" element={<Home />}  />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
     
        
      </Route>
      <Route path="/login" element={<Login />} />
      </>
    )
  );

  return (
    <div className="h-screen flex max-w-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
