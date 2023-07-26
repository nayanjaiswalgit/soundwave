
import { IoMdPlay } from "react-icons/io";
import { IoPause , IoPlaySkipBackSharp , IoPlaySkipForwardSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { next, play, prev } from "../../slices/playerSlice";

const Control = () => {
  const isPlaying = useSelector((state) => state.track.isPlaying);
  const previous = useSelector((state) => state.track.tracker);
  const track = useSelector((state) => state.track.tracks);
  const present  = useSelector((state) => state.track.previous.length);
  const dispatch = useDispatch();
  const is_next =  previous - present > 0  ?  true :false   || track.length > 1 ? true : false  ;
 
  return (
    <div className="text-xl flex gap-5  justify-end items-center md:justify-center  ">
      <button  disabled={!previous} onClick={() => dispatch(prev())} className={`${!previous && "opacity-50"}`}>
        <IoPlaySkipBackSharp />
      </button>
      <button onClick={() => dispatch(play())}>
        {isPlaying ? <IoPause /> : <IoMdPlay />}
      </button>
      <button  disabled={!is_next}  onClick={() => dispatch(next()) }  className={`${!is_next && "opacity-50"}`}>
        <IoPlaySkipForwardSharp />
      </button>
    </div>
  );
};

export default Control;
