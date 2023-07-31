import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import TopResults from "./TopResults";
import { useDispatch, useSelector } from "react-redux";

import { searchSong } from "../../slices/searchSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import FilterResult from "./FilterResult";

const Search = () => {
  const [selectedOptions, setSelectedOptions] = useState("ALL");
  const selector = useSelector((state) => state?.searchSong.searchResult);
  const isLoading = useSelector((state) => state?.searchSong.isLoading);

  const dispatch = useDispatch();

  let myTimeout;
  const handleChange = (e) => {
    const url = `https://api.spotify.com/v1/search?q=${e.target.value}&type=album%2Cplaylist%2Cartist%2Ctrack%2Cshow%2Caudiobook%2Cepisode&limit=10`;
    clearTimeout(myTimeout);

    myTimeout = setTimeout(() => {
      dispatch(searchSong(url));
    }, 1000);
  };

  return (
    <div className="md:mx-10 md:my-8 p-4 overflow-auto  ">
      <SearchBar handleChange={handleChange} />

      {isLoading && (
        <div className="flex justify-center items-center h-[80vh] overflow-hidden">
          <AiOutlineLoading3Quarters className="animate-spin text-6xl" />
        </div>
      )}
      {selector?.artists && (
        <>
          <ul className="flex gap-4 mt-6 items-center justify-center overflow-auto font-semibold  ">
            <li
              className={`border px-3 py-2 rounded-3xl  ${
                selectedOptions === "ALL"
                  ? "bg-white bg-opacity-90 text-black "
                  : ""
              }`}
              onClick={() => setSelectedOptions("ALL")}
            >
              All
            </li>
            <li
              className={`border px-3 py-2 rounded-3xl ${
                selectedOptions === "Artists"
                  ? "bg-white bg-opacity-90 text-black "
                  : ""
              }`}
              onClick={() => setSelectedOptions("Artists")}
            >
              Artists
            </li>
            <li
              className={`border px-3 py-2 rounded-3xl  ${
                selectedOptions === "Songs"
                  ? "bg-white bg-opacity-90 text-black "
                  : ""
              }`}
              onClick={() => setSelectedOptions("Songs")}
            >
              Songs
            </li>
            <li
              className={`border px-3 py-2 rounded-3xl  ${
                selectedOptions === "Playlist"
                  ? "bg-white bg-opacity-90 text-black "
                  : ""
              }`}
              onClick={() => setSelectedOptions("Playlist")}
            >
              Playlist
            </li>
            <li
              className={`border px-3 py-2 rounded-3xl  ${
                selectedOptions === "Albums"
                  ? "bg-white bg-opacity-90 text-black "
                  : ""
              }`}
              onClick={() => setSelectedOptions("Albums")}
            >
              Albums
            </li>
          </ul>

          {selectedOptions === "ALL" && (
            <>
              {" "}
              <TopResults name={"Top Result"} data={selector?.artists.items} />
              <SearchResult data={selector?.tracks?.items} />
            </>
          )}

          {selectedOptions === "Artists" && (
            <FilterResult name={"Top Result"} data={selector?.artists.items} />
          )}
          {selectedOptions === "Playlist" && (
            <FilterResult
              name={"Top playlists"}
              data={selector?.playlists.items}
            />
          )}
          {selectedOptions === "Albums" && (
            <FilterResult name={"Top albums"} data={selector?.albums.items} />
          )}
          {selectedOptions === "Songs" && (
            <SearchResult data={selector?.tracks?.items} />
          )}
        </>
      )}
    </div>
  );
};

export default Search;
