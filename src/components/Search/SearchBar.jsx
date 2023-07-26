
import search from "../../assets/search.svg";
const SearchBar = ({changehandler}) => {
  return (
    <div className="  text-white  md:h-[59px] bg-[#2E2E2E] relative rounded-3xl flex justify-center items-center ">
        <input onChange={changehandler}
          className="w-full bg-[#2E2E2E] outline-none pl-[71px] pr-3 py-2 rounded-full md:pt-4 text-xl placeholder-white md:placeholder:text-2xl  placeholder:font-medium my-auto"
          type="text"
          id="search"
          name="search"
          placeholder="Search for artists, music and genres"
        />
        <label htmlFor="search" className="absolute left-6 ">
          <img
            src={search}
            alt=""
            className="text-white cursor-pointer md:w-[31.27px] "
          />
        </label>
      </div>
  )
}

export default SearchBar