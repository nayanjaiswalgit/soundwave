import "./progressbar.css";
import PropTypes from "prop-types";

const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return "00:00";
};

const Progressbar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div className="w-[75%] h-full flex  items-center justify-center gap-5  font-semibold">
      <p className="hidden md:block ">{formatTime(timeProgress)}</p>

      <div className="md:w-full md:-mt-4 bg-[white] h-2 bg-opacity-50 rounded-full md:relative overflow-hidden absolute -bottom-2 left-0 right-0">
        <input
          type="range"
          ref={progressBarRef}
          className="slider_mob md:slider absolute top-0  bottom-0 left-0  "
          min="0"
          max="29"
          onChange={handleChange}
          defaultValue="0"
        ></input>
      </div>
      <p className="hidden md:block">{formatTime(duration)}</p>
    </div>
  );
};
Progressbar.propTypes = {
  progressBarRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  audioRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  timeProgress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Progressbar;
