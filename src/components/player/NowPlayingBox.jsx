
import pic from "../../assets/pic.png";
const NowPlayingBox = ({data}) => {
  return (
    <div className="flex justify-center items-center  ">
      <img src={data?.track?.album?.images[1]?.url} alt="" className="w-20" />
      <div className="  h-full ml-5 ">
        <p className="text-lg font-semibold  ">{data.track?.album.name}</p>
        <p className="text-sm font-medium my-2  leading-4">{data.track?.artists.map(name=>name.name)+" , "}</p>
      </div>
    </div>
  );
};

export default NowPlayingBox;
