import PropTypes from "prop-types";
import search from "../../assets/search.svg";
const SearchBar = ({ handleChange }) => {
  return (
    <div className="  text-white  md:h-[59px] bg-[#2E2E2E] relative rounded-3xl flex justify-center items-center ">
      <input
        onChange={handleChange}
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
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
