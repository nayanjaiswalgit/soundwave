import NowPlayingBox from "./NowPlayingBox";
import Player from "./Player";

const Track = () => {
  const isMusicPlaying = true; // Assume music is playing for the example

  if (!isMusicPlaying) {
    return null; // Don't render the music player if music is not playing
  }

  return (
    <div className="bg-gray-800 h-[129px] flex fixed left-0 bottom-0 w-screen justify-between items-center px-9    ">
      <NowPlayingBox />
      <Player /> 
    </div>
  );
};

export default Track;
