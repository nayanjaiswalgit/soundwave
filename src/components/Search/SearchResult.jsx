import Searchlist from "./Searchlist"



const SearchResult = ({data}) => {

  return (
  <div className="md:mt-12 font-semibold mt-6">
    <p className="md:text-4xl text-2xl" >Songs</p>
   <div className="overflow-y-auto md:mt-6 mt-2 ">
   
   {data.map((track,index)=> <Searchlist key={index} track={track}/>)}
  
    
   </div>
  
  </div>
  )
}

export default SearchResult