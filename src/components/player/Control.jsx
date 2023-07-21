
import { useEffect } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";

const Control = ({setPlay,audioRef,play}) => {


  useEffect(() => {
    if(play){
    audioRef.current.play()
    
  }
  else {
    audioRef.current.pause()
  }
    return () => {
      
    }
  }, [play])
  

  const clickHandler = ()=> {
    setPlay((prev)=>!prev)
    
  }

  return (
    <div className="text-xl flex gap-5 justify-center items-center ">
    
      <IoPlaySkipBackSharp  className="cursor-pointer"/>
    <button onClick={clickHandler}> {play ?  <IoPause  />:<IoMdPlay   />}</button>
      <IoPlaySkipForwardSharp   className="cursor-pointer"/>
    </div>
  );
};

export default Control;
