import logo from "../assets/logowhite.png";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { BiSolidPlaylist } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const sylenav = ({ isActive, isPending }) =>
    isPending
      ? " flex  items-center gap-2 pl-6 h-12 rounded-r-full"
      : isActive
      ? " flex  items-center gap-2 pl-6 h-12 rounded-r-full bg-white text-[#1ED760] "
      : "flex  items-center gap-2 pl-6 h-12 rounded-r-full";

  return (
    <div className="min-w-96   h-full bg-[#1ED760]  flex-col  relative text-xl   ">
      <div className="mx-auto mt-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-4 mt-10 ">
        <NavLink to="/" className={sylenav}>
          <AiFillHome /> <p>Home</p>
        </NavLink>
        <NavLink   to="/profile" className={sylenav}>
          <CgProfile />
          <p>Profile</p>
        </NavLink>
        <NavLink to="/search" className={sylenav}>
          <CiSearch />
          <p>Search</p>
        </NavLink>
        <NavLink to="/playlist" className={sylenav}>
          <BiSolidPlaylist />
          <p>Feature Playlist</p>
        </NavLink>
      </div>
      <Link to="/login" className=" gap-2  bottom-3 absolute flex  items-center  pl-6 h-12 rounded-r-full" >
        <MdLogout />
        <p>Logout</p>
      </Link>
    </div>
  );
};

export default Sidebar;
