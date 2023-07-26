
import { useDispatch } from "react-redux";

import { fetchTrack } from "../../slices/playerSlice";
const   TopResults = ({data}) => {
  const dispatch = useDispatch();
  return (
    <div >
    <p className="md:text-4xl text-2xl md:mt-16 mt-4 text-white font-semibold">TopResults</p>
    <div className="md:max-w-[523px] w-44 md:w-96 md:max-h-[303px]  overflow-hidden rounded-3xl relative md:mt-7 mt-4"  onClick={()=>dispatch(fetchTrack(data.href))}>
      <img
        src={data.images[0].url}
        alt=""
        className="md:w-auto transform object-cover transition-transform duration-1000 hover:scale-110 hover:cursor-pointer"
      />
      <div className="absolute bottom-0 md:h-[93px] bg-[#151515] w-full bg-opacity-60">
        <p  className="m-auto md:text-4xl text-xl p-2 md:p-6">{data.name}</p>
      </div>
    </div>
  </div>
  
  );
};

export default TopResults;
