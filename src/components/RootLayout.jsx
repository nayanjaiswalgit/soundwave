import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Track from "./Track"

const RootLayout = () => {
  return (

    <div  className="h-full flex">
       
        <Sidebar />

   
    <div className="w-[calc(140px-354px)]">
    <Outlet/>
    </div>
  <Track/>
      
    </div>
 
  )
}

export default RootLayout