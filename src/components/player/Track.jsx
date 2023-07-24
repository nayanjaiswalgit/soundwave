
import { useDispatch, useSelector } from "react-redux";
import NowPlayingBox from "./NowPlayingBox";
import Player from "./Player";
import { useEffect, useState } from "react";
import { fetchTrack } from "../../features/player/playerSlice";

const Track = ({track}) => {
  

  const array = useSelector(state=>state.track.currentPlaying);
  const current = useSelector(state=>state.track.tracker);
  const [song,setSong] = useState(0);
  const [isPlaying,setPlay] = useState(false);
  const dispatch = useDispatch()

  
  useEffect(() => {
    
  
    return () => {
      
    }
  }, [isPlaying,array.length])
console.log('hello')

  return (
    <div className="bg-gray-800 h-[129px] flex fixed left-0 bottom-0 w-screen justify-between items-center px-9    ">
    
    {array.length > 0 && <NowPlayingBox data = {array[current]} />}

   
    </div>
  );
};

export default Track;
