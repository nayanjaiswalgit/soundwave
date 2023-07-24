
import pic from "../assets/pic.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {useSelector }from 'react-redux';

const Profile = () => {

 var user =  useSelector(state => state.auth.user);

  return (
    <div className=" mt-12 ml-[73px] ">
      <p className="text-5xl  font-semibold">Profile</p>
      <div className="flex  mt-12 items-center flex-wrap">
        <div>
          <img   src={user?.images[1]?.url ?user?. images[1]?.url : pic } alt="profilepic" className="w-[18rem] rounded-full " />
        </div>
        <div className="p-8 ">
          <p className="text-3xl font-bold ">{user?.display_name}</p>
          <p className="text-xl text-gray-400 text-[#FFFFFF80] mt-2">
           {user?.email}
          </p>
          <a href={user?.external_urls?.spotify}>  <button className="p-2 bg-[#1ED760] flex justify-evenly items-center w-44 rounded-full mt-8">
          Open in Spotify
            <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
            
          </button> </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
