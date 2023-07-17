import Searchlist from "./searchlist"



const SearchResult = () => {
  return (
  <div className="mt-12 font-semibold">
    <p className="text-4xl">Songs</p>
   <div className="overflow-y-auto mt-6 ">
   <Searchlist/>
    <Searchlist/>
    <Searchlist/>
    <Searchlist/>
    <Searchlist/>
    <Searchlist/>
    <Searchlist/>
    <Searchlist/>
    <Searchlist/>
    <Searchlist/>
   </div>
  
  </div>
  )
}

export default SearchResult