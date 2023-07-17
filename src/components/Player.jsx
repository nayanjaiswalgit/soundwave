import { useState } from "react"
import Progressbar from "./progressbar";
import Control from "./Control";
import { RxSpeakerLoud } from "react-icons/rx";
import NowPlayingBox from "./NowPlayingBox";
const Player = () => {
  const [processbar ,setProgressbar] = useState(40) ;
    
  

  return (
    <div className='h-[129px] w-[80] flex justify-center items-center'>

 <NowPlayingBox/>
   </div>
  )
}

export default Player