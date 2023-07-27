
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {useSelector }from 'react-redux';

const Profile = () => {

 var user =  useSelector(state => state.auth.user);

  return (
    <div className=" mt-12 md:ml-[73px]">
      <p className="text-5xl  font-semibold text-center md:text-start">Profile</p>
      <div className="flex  mt-12 md:items-start items-center md:flex-wrap flex-col">
        <div>
          <img   src={user?.images[1]?.url } alt="profile_pic" className="w-[18rem] rounded-full " />
        </div>
        <div className="p-8 ">
          <p className="text-3xl font-bold ">{user?.display_name}</p>
          <p className="text-xl text-gray-400 text-[#FFFFFF80] mt-2">
           {user?.email}
          </p>
          <a href={user?.external_urls?.spotify}>  <button className="p-2 bg-[#1ED760] flex justify-evenly items-center w-44 rounded-full mt-8 m-auto">
          Open in Spotify
            <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
            
          </button> </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
