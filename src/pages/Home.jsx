import pic from "../assets/pic.png";
import { BsBellFill } from "react-icons/bs";
import Playlist from "../components/Playlist";
import {useDispatch, useSelector }from 'react-redux';
import { Link,  } from "react-router-dom";
import { useEffect } from "react";
import { fetchPlaylist } from "../features/playlist/PlaylistSlice";
import { fetchThisWeekSongs } from "../features/track/trackSlice";
import MusicPlaylist from "../components/MusicPlaylist";

const Home = () => {
  const dispatch = useDispatch() ; 
  useEffect(() => {
    dispatch(fetchPlaylist());
    dispatch(fetchThisWeekSongs());

  }, [dispatch])
  

  var user =  useSelector(state => state.user.profile);
  var Featured_playlist  = useSelector(state => state?.playlist?.playlists[0]?.payload?.playlists.items);
  var This_week_song =  useSelector(state => state?.song?.songs[0]?.items);
  console.log("hello", user)

  
  return (
    <div className="w-full p-[42px]">
      <div className="flex justify-between">
        <div className="text-6xl text-[#1ED760] ">Good Evening!</div>

        
        <div className="h-16 flex items-center ">
          <button className="relative self ">
            <BsBellFill className="text-4xl white" />
            <div className="border-4 absolute -top-1 -right-1  rounded-full border-black">
              <div className="w-3 h-3 bg-[#1ED760]  rounded-full"></div>
            </div>
          </button>
          <button className="w-[50px] ml-7 ">
            <Link to ="/profile"><img  className="rounded-full" src={user?.images[1].url ?user?. images[1].url : pic }  alt="" />
            </Link> 
          </button>
        </div>
      </div>
      <div >
      <Playlist playlist={Featured_playlist} Name = {"Featured playlist"} />
      <MusicPlaylist Featured_playlist={This_week_song} Name = {"This Week songs"} />
   
    
      </div>
    
    </div>
  );
};

export default Home;
