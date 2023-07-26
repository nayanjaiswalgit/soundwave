import { useSelector } from "react-redux";
import MusicPlaylist from "./Home/MusicPlaylist"
import Playlist from "./Home/Playlist";


const PlaylistPage = () => {

  const Featured_playlist = useSelector(
    (state) => state?.playlist?.playlists[0]?.payload?.playlists?.items
  );
  const This_week_song = useSelector((state) => state?.Weak_Song.songs?.items);

  return (
    <div className=" md:w-full md:p-[42px] p-5 h-screen w-screen">
        <div className="md:text-6xl text-[#1ED760] w-full text-4xl whitespace-nowrap">
          Your Library
        </div>
    <Playlist playlist={Featured_playlist} Name={"Featured playlist"} />
    <MusicPlaylist
      Featured_playlist={This_week_song}
      Name={"This Week songs"}
     
    />
     </div>
  )
}

export default PlaylistPage