
import { useEffect, useState } from "react";
import { fetchData } from "../api/spotifyAPI";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import TopResults from "../components/TopResults";
import { useDispatch, useSelector } from "react-redux";
import { fetchThisWeekSongs } from "../features/track/trackSlice";




const Search = () => {
  

    const selector = useSelector(state => state?.song.songs)
    const dispatch = useDispatch() ;
 
  let myTimeout ;
  const changehandler = (e) => {
    console.log(e.target.value);
    const url = `https://api.spotify.com/v1/search?q=${e.target.value}&type=artist%2Ctrack`
    clearTimeout(myTimeout);
     myTimeout =  setTimeout(() => {
        dispatch(fetchThisWeekSongs(url))
    }, 1000);
    
  }
  
  return (
    <div className="mx-10 my-8 overflow-auto ">
    
     <SearchBar changehandler ={changehandler} />
{ selector?.artists && <>
     <TopResults data = {selector?.artists.items[0]}/>
   <SearchResult  data = {selector?.tracks?.items}/>
   </> }
    </div>
  );
};

export default Search;
