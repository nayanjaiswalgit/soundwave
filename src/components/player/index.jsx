import Control from "./Control";
import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import Progressbar from "./Progressbar";
import { useSelector } from "react-redux";
import Volume from "./Volume";

const Player = ({ data }) => {
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
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat, change, data]);

  return (
    <div className=" w-[85%] h-[36px] md:flex justify-around items-center ">
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

export default Player;
Player.propTypes = {
  data: PropTypes.object,
};
