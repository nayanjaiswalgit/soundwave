import { IoMdPlay } from "react-icons/io";
import { useDispatch } from "react-redux";
import { add } from "../features/player/playerSlice";

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const Searchlist = ({track}) => {
 const dispatch = useDispatch()
  return (
    <div className=" h-[81px] flex justify-between items-center gap-4 py-3 px-[20px]" onClick={()=>dispatch(add(track))}>
      <div className=" flex justify-between align-center">
        <div className="min:w-[58px] h-[58px]">
          <img src={track?.album.images[2]?.url} alt="" />
        </div>
        <div className="pl-4">
          <p className="text-lg">{track?.name}</p>
          <p className="text-sm opacity-50">{track.artists.map((name)=>name.name + ", ")}</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[87px] text-lg">
        <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
        <div>
          <IoMdPlay />
        </div>
      </div>
    </div>
  );
};

export default Searchlist;
