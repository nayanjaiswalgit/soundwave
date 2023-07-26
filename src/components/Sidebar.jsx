import logo from "../assets/logowhite.png";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { BiSolidPlaylist } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { Link, NavLink, } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOut } from "../slices/authSlice";


const Sidebar = () => {
const dispatch = useDispatch();
  const style = ({ isActive, isPending }) =>
    isPending
      ? " flex  items-center gap-2 pl-6 h-12 rounded-r-full"
      : isActive
      ? " flex  items-center gap-2 pl-6 h-12 rounded-r-full bg-white text-[#1ED760] "
      : "flex  items-center gap-2 pl-6 h-12 rounded-r-full";

  return (
    <div className="hidden md:flex w-[22rem] h-full bg-[#1ED760]  flex-col  relative text-xl   flex-grow-1">
      <div className="mx-auto mt-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-4 pt-10  font-medium">
        <NavLink to="/home" className={style}>
          <AiFillHome /> <p>Home</p>
        </NavLink>
        <NavLink to="/profile" className={style}>
          <CgProfile />
          <p>Profile</p>
        </NavLink>
        <NavLink to="/search" className={style}>
          <CiSearch />
          <p>Search</p>
        </NavLink>
        <NavLink to="/playlist" className={style}>
          <BiSolidPlaylist />
          <p>Feature Playlist</p>
        </NavLink>
      </div>

      <Link to={"/login"}>
        <button
          onClick={()=>dispatch(LogOut())}
          className=" gap-2  bottom-3 absolute flex  items-center  pl-6 h-12 rounded-r-full"
        >
          Logout <MdLogout />
        </button>
      </Link>
 
    </div>
  );
};

export default Sidebar;
