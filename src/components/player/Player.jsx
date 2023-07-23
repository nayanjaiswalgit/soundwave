import Progressbar from "./Progressbar";
import Control from "./Control";
import { RxSpeakerLoud } from "react-icons/rx";
import { useRef, useState } from "react";
const Player = ({data, setSong, song }) => {
  const [play,setPlay] = useState(false);
  const audioRef = useRef();
  return (

    <div className=" w-[85%] h-[36px] flex justify-around items-center ">
        <div className="h-10 bg-white">
     <audio src={data.track.preview_url} ref={audioRef} controls>a digital watch alarm</audio>
     </div>
      <Control setSong={setSong} song={song} setPlay={setPlay} audioRef={audioRef} play={play}/>
      <Progressbar audioRef={audioRef} />
   
<RxSpeakerLoud className="m-2  text-xl"/>

    </div>
  );
};

export default Player;
