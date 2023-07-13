import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const RootLayout = () => {
  return (
    <div  className="h-screen  flex">
        <div className="max-w-96"> <Sidebar /></div>
       
    <Outlet/>
    
    </div>
  )
}

export default RootLayout