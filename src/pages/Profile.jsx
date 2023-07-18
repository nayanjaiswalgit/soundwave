
import pic from "../assets/pic.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {useSelector }from 'react-redux';
const Profile = () => {
 const user =  useSelector(state => state.user);
 console.log(user);
  return (
    <div className=" mt-12 ml-[73px] ">
      <p className="text-5xl  font-semibold">Profile</p>
      <div className="flex  mt-12 items-center flex-wrap">
        <div>
          <img src={pic} alt="profilepic" className="min-w-[200px]" />
        </div>
        <div className="p-8 ">
          <p className="text-3xl font-bold ">User Display Name</p>
          <p className="text-xl text-gray-400 text-[#FFFFFF80] mt-2">
            aaaaa@g.com
          </p>
          <button className="p-2 bg-[#1ED760] flex justify-evenly items-center w-44 rounded-full mt-8">
            Open in Spotify<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
