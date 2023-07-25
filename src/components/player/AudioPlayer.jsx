import {  useSelector } from "react-redux";
import DisplayTrack  from "./DisplayTrack";
import Player from "./Player";
import { useEffect } from "react";



const AudioPlayer = () => {
  const array = useSelector((state) => state.track.currentPlaying);

  useEffect(() => {
    return () => {};
  }, [array]);

  return (
    <div className="bg-gray-800 h-20 md:h-[129px] flex fixed left-0 bottom-0 w-screen justify-between items-center px-9    ">
      {array && <DisplayTrack  currentTrack={array} />}
      {array && <Player data={array} />}
      
    </div>
  );
};

export default AudioPlayer;
