import { Navigate, Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Track from "../player/Track"
import { useEffect } from "react";
import { fetchData } from "../../api/spotifyAPI";

function useAuth() {
  return !!localStorage.getItem("token");
}




const track =false;
const RootLayout = () => {
  useEffect(() => {
    const data = async() => {
     const response =  await fetchData("https://api.spotify.com/v1/me/player/recently-played");
     console.log(response) ;
    }
  data();
  
    return () => {
    }
     
  }, [])
  
  return (

    <div  className={`${ track ? 'h-[calc(100vh-8rem)]' : 'h-full' }  flex `}>
       
        <Sidebar />

   
    <div className="md:w-[calc(100vw-22rem)]  w-screen overflow-auto">
    <Outlet/>
    </div>
 { track && <Track/>} 

    </div>

  )
}

export default RootLayout