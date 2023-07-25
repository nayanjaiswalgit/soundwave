import { useEffect, useState } from "react";
import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff } from "react-icons/io";
import PropTypes from "prop-types";

const Volume = ({ audioRef }) => {
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div>
      {" "}
      <div className="m-2  text-xl  flex  group  transition-all duration-300">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 1 ? (
            <IoMdVolumeOff />
          ) : volume < 40 ? (
            <IoMdVolumeLow />
          ) : (
            <IoMdVolumeHigh />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="Volume_slider h-1 mt-2 ml-1 w-0 group-hover:w-12 transition-all duration-300"
        />
      </div>
    </div>
  );
};

Volume.propTypes = {
  audioRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Volume;
