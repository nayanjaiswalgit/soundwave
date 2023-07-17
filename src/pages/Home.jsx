import pic from "../assets/pic.png";
import { BsBellFill } from "react-icons/bs";
import Playlist from "../components/Playlist";
const Home = () => {
  return (
    <div className="w-full p-[42px]">
      <div className="flex justify-between">
        <div className="text-6xl text-[#1ED760] mb-[44px]">Good Evening!</div>
        <div className="h-16 flex items-center ">
          <button className="relative self ">
            <BsBellFill className="text-4xl white" />
            <div className="border-4 absolute -top-1 -right-1  rounded-full border-black">
              <div className="w-3 h-3 bg-[#1ED760]  rounded-full"></div>
            </div>
          </button>
          <button  className="w-[50px] ml-7">
            <img src={pic} alt="" />
          </button>
        </div>
      </div>
      <Playlist />
    </div>
  );
};

export default Home;
