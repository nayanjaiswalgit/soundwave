import Progressbar from "./Progressbar";
import Control from "./Control";
import { RxSpeakerLoud } from "react-icons/rx";

const Player = () => {
  return (
    <div className=" w-[85%] h-[36px] flex justify-around items-center ">
      <Control />
      <Progressbar />
   
<RxSpeakerLoud className="m-2  text-xl"/>

    </div>
  );
};

export default Player;
