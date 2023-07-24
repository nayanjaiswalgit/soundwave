
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import TopResults from "../components/TopResults";
import { useDispatch, useSelector } from "react-redux";

import { searchSong } from "../features/searchSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";




const Search = () => {
 
    const selector = useSelector(state => state?.searchSong.searchResult)
    const isLoading = useSelector(state => state?.searchSong.isLoading)
    const dispatch = useDispatch() ;
 
  console.log(selector)
  let myTimeout ;
  const changehandler = (e) => {
  
    const url = `https://api.spotify.com/v1/search?q=${e.target.value}&type=artist%2Ctrack`
    clearTimeout(myTimeout);
     myTimeout =  setTimeout(() => {
        dispatch(searchSong(url))
    }, 1000);
    
  }
  
  return (
    <div className="mx-10 my-8 overflow-auto  ">
     <SearchBar changehandler ={changehandler} />
     {  isLoading  &&  <div className="flex justify-center items-center h-[80vh] overflow-hidden"> <AiOutlineLoading3Quarters className="animate-spin text-6xl" /></div>}
{ selector?.artists && <>
     <TopResults data = {selector?.artists.items[0]}/>
   <SearchResult  data = {selector?.tracks?.items}/>
   </> }
    </div>
  );
};

export default Search;
