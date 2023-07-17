
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";

const Control = () => {
  return (
    <div className="text-xl   flex gap-5 justify-center items-center ">
    
      <IoPlaySkipBackSharp  className="cursor-pointer"/>
      <IoMdPlay   className="cursor-pointer" />
      <IoPlaySkipForwardSharp   className="cursor-pointer"/>
    </div>
  );
};

export default Control;
//  <IoPause />