
import { useDispatch, useSelector } from "react-redux";
import NowPlayingBox from "./NowPlayingBox";
import Player from "./Player";
import { useEffect, useState } from "react";
import { fetchTrack } from "../../features/player/playerSlice";

const Track = () => {
  const selector = useSelector(state=>state.track?.tracks.tracks);
  const [song,setSong] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTrack());
  
    return () => {
      
    }
  }, [])

 
  const isMusicPlaying = false; // Assume music is playing for the example

  if (!isMusicPlaying) {
    return null; // Don't render the music player if music is not playing
  }

  
  

  return (
    <div className="bg-gray-800 h-[129px] flex fixed left-0 bottom-0 w-screen justify-between items-center px-9    ">
    
      <NowPlayingBox data = {selector?.items[song]} />
      <Player data = {selector?.items[song]}  setSong={setSong} song={song} /> 
    </div>
  );
};

export default Track;
