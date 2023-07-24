
  import './progressbar.css'

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  const Progressbar = ({progressBarRef , audioRef , timeProgress, duration}) => {

  
  
    const changehandler = (e) => {
      audioRef.current.currentTime = progressBarRef.current.value;
    }

    return (
    <div className="w-[75%] h-full flex  items-center justify-center gap-5  font-semibold">
    <p>{formatTime(timeProgress)}</p>

  
        <div className='w-full bg-[white] h-2 bg-opacity-50 rounded-full relative overflow-hidden'>
        <input type="range" ref={progressBarRef}  className=' slider absolute top-0  bottom-0 left-0 ' min="0" max="28" onChange={changehandler} defaultValue="0" ></input>
          
        </div>
        <p>{formatTime(duration)}</p>
        </div>
    )
  }

  export default Progressbar