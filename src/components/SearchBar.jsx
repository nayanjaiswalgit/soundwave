import React from 'react'
import serach from "../assets/search.svg";
const SearchBar = ({changehandler}) => {
  return (
    <div className=" text-white  h-[59px] bg-[#2E2E2E] relative rounded-3xl flex justify-center items-center ">
        <input onChange={changehandler}
          className="w-full bg-[#2E2E2E] outline-none pl-[71px] pr-3 py-2 rounded-full pt-4 text-xl placeholder-white placeholder:text-2xl placeholder:font-medium my-auto"
          type="text"
          id="search"
          name="search"
          placeholder="Search for artists, music and genres"
        />
        <label htmlFor="search" className="absolute left-6 ">
          <img
            src={serach}
            alt=""
            className="text-white cursor-pointer w-[31.27px]"
          />
        </label>
      </div>
  )
}

export default SearchBar