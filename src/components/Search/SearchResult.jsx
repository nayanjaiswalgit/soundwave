import Searchlist from "./Searchlist"



const SearchResult = ({data}) => {

  return (
  <div className="mt-12 font-semibold">
    <p className="text-4xl">Songs</p>
   <div className="overflow-y-auto mt-6 ">
   
   {data.map((track,index)=> <Searchlist key={index} track={track}/>)}
  
    
   </div>
  
  </div>
  )
}

export default SearchResult