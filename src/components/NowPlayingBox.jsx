
import pic from "../assets/pic.png";
const NowPlayingBox = () => {
  return (
    <div className="flex justify-between items-center  w-48 ">
      <img src={pic} alt="" className="w-20" />
      <div className="  h-full  ">
        <p className="text-lg font-semibold  ">Song Name</p>
        <p className="text-sm font-medium my-2  leading-4">Artish Name</p>
      </div>
    </div>
  );
};

export default NowPlayingBox;
