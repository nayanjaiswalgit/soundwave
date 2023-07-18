import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Track from "../player/Track"

const track = true;
const RootLayout = () => {
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