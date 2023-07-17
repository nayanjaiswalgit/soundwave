
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import TopResults from "../components/TopResults";

const Search = () => {
  return (
    <div className="mx-10 my-8">
    
     <SearchBar/>
     <TopResults/>
   <SearchResult/>
    </div>
  );
};

export default Search;
