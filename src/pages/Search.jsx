
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
<div  className="w-screen">
  <div className="relative w-full">
    <input type="text"  id="search"  name="search" placeholder="Search for artists, music and genres" />
  </div>
  <label htmlFor="search absolute">
    <CiSearch/>
  </label>
</div>

  )
}

export default Search