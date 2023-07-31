import Control from "./Control";
import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import Progressbar from "./Progressbar";
import { useSelector } from "react-redux";
import Volume from "./Volume";

const MainPlayer = ({ data }) => {
  const isPlaying = useSelector((state) => state.track.isPlaying);

  const playAnimationRef = useRef();
  const audioRef = useRef(null);
  const progressBarRef = useRef();

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const change = useSelector((state) => state.track.tracker);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat, change, data]);

  return (
    <div className=" md:w-[85%] md:h-[36px] flex md:justify-around items-center justify-center md:gap-0 gap-1">
      <audio
        src={data.preview_url}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      <Control />

      <Progressbar
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        duration={duration}
        timeProgress={timeProgress}
      />

      <Volume audioRef={audioRef} />
    </div>
  );
};

export default MainPlayer;
MainPlayer.propTypes = {
  data: PropTypes.object,
};
