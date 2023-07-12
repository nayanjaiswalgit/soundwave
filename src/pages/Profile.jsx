import pic from "../assets/pic.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Profile = () => {
  return (
    <div className="p-10 ">
      <p className="text-4xl ml-8 font-bold">Profile</p>
      <div className="flex m-5   items-center flex-wrap">
        <div >
          <img src={pic} alt="profilepic"  className="min-w-[200px]" />
        </div>
        <div className="p-8 ">
          <p className="text-3xl font-bold ">User Display Name</p>
          <p className="text-xl text-gray-400 text-[#FFFFFF80]" >aaaaa@g.com</p>
          <button
            className="p-2 bg-[#1ED760] flex justify-evenly items-center w-44 rounded-full mt-4"
          >
            Open in Spotify<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
