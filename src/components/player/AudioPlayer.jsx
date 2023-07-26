import { useSelector } from "react-redux";
import DisplayTrack from "./DisplayTrack";
import Player from ".";
import { useEffect } from "react";

const AudioPlayer = () => {
  const array = useSelector((state) => state.track.currentPlaying);

  useEffect(() => {
    return () => {};
  }, [array]);

  if (!array) {
    return null;
  }

  return (
    <div className="bg-gray-800 h-20 md:h-[129px] flex fixed left-0 bottom-0 w-screen justify-between items-center px-9    ">
      <DisplayTrack currentTrack={array} />
      <Player data={array} />
    </div>
  );
};

export default AudioPlayer;
