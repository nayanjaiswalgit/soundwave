
import pic from "../../assets/pic.png";
const NowPlayingBox = () => {
  return (
    <div className="flex justify-center items-center  ">
      <img src={pic} alt="" className="w-20" />
      <div className="  h-full ml-5 ">
        <p className="text-lg font-semibold  ">Song Name</p>
        <p className="text-sm font-medium my-2  leading-4">Artish Name</p>
      </div>
    </div>
  );
};

export default NowPlayingBox;
