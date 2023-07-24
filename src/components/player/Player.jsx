import Progressbar from "./Progressbar";
import Control from "./Control";
import { RxSpeakerLoud } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
const Player = ({data, setSong, song , isPlaying,setPlay }) => {
  
  const audioRef = useRef(null);
  const progressBarRef = useRef();

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

useEffect(() => {
  console.log("hello")

}, [isPlaying,song])


  return (

    


    <div className=" w-[85%] h-[36px] flex justify-around items-center ">
        <div className="h-10 bg-white">
     <audio src={data.track.preview_url }  ref={audioRef} className="hidden" onLoadedMetadata={onLoadedMetadata}/>
     </div>
      <Control />
      
<RxSpeakerLoud className="m-2  text-xl"/>

    </div>
  );
};

export default Player;
//<Progressbar progressBarRef={progressBarRef} audioRef={audioRef}  timeProgress={timeProgress} duration={duration} song={song}/>
   