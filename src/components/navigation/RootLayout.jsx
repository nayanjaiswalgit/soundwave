import {  Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"
import AudioPlayer from "../Player/AudioPlayer"

import { useSelector } from "react-redux";
import { useEffect } from "react";
import MobileNav from "../MobileNav";



const RootLayout = () => {
  const current =  useSelector(state=>state.track.currentPlaying);


  useEffect(() => {
  

  }, [current])
 
  return (

    <div  className={`${ current ? 'h-[calc(100vh-8rem)]' : 'md:h-full h-screen' } flex `}>
       
        <Sidebar />

   
    <div className="md:w-[calc(100vw-22rem)] w-screen overflow-auto">
    <Outlet/>

    </div>
  {  current && <AudioPlayer/>}
  <MobileNav/>
    </div>

  )
}

export default RootLayout