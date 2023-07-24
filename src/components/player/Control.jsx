
import { useCallback, useEffect, useRef } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";

const Control = ({song,setPlay,audioRef,isPlaying,setSong,progressBarRef  , timeProgress, duration, setTimeProgress,}) => {
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress,song]);


  useEffect(() => {
    if (isPlaying) {
      console.log("playing")
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlaying, audioRef, repeat]);

  const clickHandler = ()=> {
    setPlay((prev)=>!prev)
    
  }

  return (
    <div className="text-xl flex gap-5 justify-center items-center ">
    
<button onClick={()=>setSong((prev)=>prev-1)}><IoPlaySkipBackSharp  /></button>
    <button onClick={clickHandler}> {isPlaying ?  <IoPause  />:<IoMdPlay   />}</button>
   <button onClick={()=>setSong((prev)=>prev+1)} > <IoPlaySkipForwardSharp  /></button>  
    </div>
  );
};

export default Control;
