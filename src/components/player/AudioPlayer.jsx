import { useSelector } from "react-redux";
import DisplayTrack from "./DisplayTrack";
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
    <div className="bg-gray-800 h-16 md:h-[129px] flex fixed left-0 md:bottom-0 bottom-[5.5rem] w-screen justify-between items-center md:px-9   px-3 ">
      <DisplayTrack currentTrack={array} />
      <Player data={array} />
    </div>
  );
};

export default AudioPlayer;
