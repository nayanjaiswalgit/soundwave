

const NowPlayingBox = ({data}) => {
  return (
    
    <div className="flex justify-center items-center  ">
      <img src={data?.album?.images[1]?.url} alt="" className="w-20" />
      <div className="  h-full ml-5 ">
        <p className="text-lg font-semibold  ">{data.album.name}</p>
        <p className="text-sm font-medium my-2  leading-4">{data.artists.map(name=>name.name)+" , "}</p>
      </div>
    </div>
  );
};

export default NowPlayingBox;
