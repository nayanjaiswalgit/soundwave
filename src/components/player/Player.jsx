import Progressbar from "./Progressbar";
import Control from "./Control";
import { RxSpeakerLoud } from "react-icons/rx";
import { useRef, useState } from "react";
const Player = () => {
  const [play,setPlay] = useState(false);
  const audioRef = useRef();
  return (

    <div className=" w-[85%] h-[36px] flex justify-around items-center ">
        <div className="h-10 bg-white">
     <audio src="https://p.scdn.co/mp3-preview/e968b6f77e1da7afd1819ee9182cb72b519b7bc9?cid=10a6a679992847328290f17973ad3115" ref={audioRef} controls>a digital watch alarm</audio>
     </div>
      <Control setPlay={setPlay} audioRef={audioRef} play={play}/>
      <Progressbar audioRef={audioRef} />
   
<RxSpeakerLoud className="m-2  text-xl"/>

    </div>
  );
};

export default Player;
