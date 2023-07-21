import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Track from "../player/Track"
import { useEffect } from "react";
import { fetchData } from "../../api/spotifyAPI";

const track = true;
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

    <div  className={`${ track ? 'h-[calc(100vh-8rem)]' : 'h-full' }  flex`}>
       
        <Sidebar />

   
    <div className="w-[calc(100vw-22rem)] overflow-auto">
    <Outlet/>
    </div>
 { track && <Track/>} 

    </div>

  )
}

export default RootLayout