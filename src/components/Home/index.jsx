
import { BsBellFill } from "react-icons/bs";
import Playlist from "./Playlist";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MusicPlaylist from "./MusicPlaylist";

function getTimeOfDay() {
  const hour = new Date().getHours();

  if (hour >= 3 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
const Home = () => {
  const user = useSelector((state) => state.auth?.user);
  const Featured_playlist = useSelector(
    (state) => state?.playlist?.playlists[0]?.payload?.playlists?.items
  );
  const This_week_song = useSelector((state) => state?.Weak_Song.songs?.items);

  const greeting = getTimeOfDay();

  return (
    <div className="w-full p-[42px]">
      <div className="flex justify-between">
        <div className="md:text-6xl text-[#1ED760] w-full text-4xl whitespace-nowrap">
          {greeting}
        </div>

        <div className="md:h-16  items-center flex  ">
          <button className="relative self">
            <BsBellFill className="md:text-4xl white text-2xl " />
            <div className="md:border-4 absolute -top-1 -right-1  rounded-full border-black">
              <div className="w-3 h-3 bg-[#1ED760]  rounded-full"></div>
            </div>
          </button>
          <button className="w-[50px] ml-7 ">
            <Link to="/profile">
              <img
                className="rounded-full"
                src={user?.images[1].url }
                alt=""
              />
            </Link>
          </button>
        </div>
      </div>
      <div>
        <Playlist playlist={Featured_playlist} Name={"Featured playlist"} />
        <MusicPlaylist
          Featured_playlist={This_week_song}
          Name={"This Week songs"}
        />
      </div>
    </div>
  );
};

export default Home;