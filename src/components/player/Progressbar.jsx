  function millisToMinutesAndSeconds(millis) {

    var minutes = Math.floor(millis / 60000);

    var seconds = ((millis % 60000) ).toFixed(0);

    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  import { useState } from 'react';
  import './progressbar.css'

  const Progressbar = ({audioRef}) => {

    var timing =  audioRef?.current ;
    const [state, setstate] = useState(0)
    const [time,settime] = useState(millisToMinutesAndSeconds(timing.currentTime))
    const percent = audioRef?.current?.currentTime / audioRef?.current?.duration * 100 ;
    const changehandler = (e) => {
      timing.currentTime = e.target.value/100;
      settime(e.target.value);
      console.log("timefd", timing.currentTime);

    }

    return (
    <div className="w-[75%] h-full flex  items-center justify-center gap-5  font-semibold">
    <p>{millisToMinutesAndSeconds(time)}</p>

  
        <div className='w-full bg-[white] h-2 bg-opacity-50 rounded-full relative overflow-hidden'>
        <input type="range" className=' slider absolute top-0  bottom-0 left-0 ' min="0" max={audioRef?.current?.duration*100} onChange={changehandler} value={time} ></input>
          
        </div>
        <p>{millisToMinutesAndSeconds(audioRef?.current?.duration)}</p>
        </div>
    )
  }

  export default Progressbar