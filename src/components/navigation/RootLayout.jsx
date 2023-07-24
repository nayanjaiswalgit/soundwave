import {  Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Track from "../player/Track"

import { useSelector } from "react-redux";
import { useEffect } from "react";
import NowPlayingBox from "../player/NowPlayingBox";



const RootLayout = () => {
  const current = useSelector(state=>state.track.currentPlaying);
  const cheack = useSelector(state=>state.track.tracker);

  useEffect(() => {
  

  }, [cheack])
  console.log(current);
  
  return (

    <div  className={`${ cheack ? 'h-[calc(100vh-8rem)]' : 'h-full' }  flex `}>
       
        <Sidebar />

   
    <div className="md:w-[calc(100vw-22rem)]  overflow-auto">
    <Outlet/>

    </div>
  {  cheack && <Track/>}
    </div>

  )
}

export default RootLayout