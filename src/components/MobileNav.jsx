
import { AiFillHome } from 'react-icons/ai'
import { BiSolidPlaylist } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { LuSearch } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
    const style = ({ isActive, isPending }) =>
    isPending
      ? " flex  items-center gap-2 pl-6 h-12 rounded-r-full flex-col"
      : isActive
      ? " flex  items-center justify-evenly pl-6 h-12 rounded-r-full text-[#1ED760] text-2xl flex-col gap-1  "
      : "flex  items-center justify-evenly pl-6 h-12 rounded-r-full text-2xl flex-col gap-1 ";

  return (
    <div className='  md:hidden w-screen h-20 bg-tr absolute bottom-0 flex justify-evenly items-center bg-black bg-opacity-90 rounded-t-md'>

        <NavLink to="/home" className={style}>
          <AiFillHome className="text-2xl" /> <p className='text-sm font-semibold'>Home</p>
        </NavLink>
        <NavLink to="/profile" className={style}>
          <CgProfile />
          <p className='text-sm font-semibold' >Profile</p>
        </NavLink>
        <NavLink to="/search" className={style}>
          <LuSearch />
          <p className='text-sm font-semibold' >Search</p>
        </NavLink>
        <NavLink to="/playlist" className={style}>
          <BiSolidPlaylist />
          <p className='text-sm font-semibold'>Your Library</p>
        </NavLink>
    

    </div>
  )
}

export default MobileNav