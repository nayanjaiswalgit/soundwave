
import { useDispatch } from "react-redux";
import topcart from "../assets/top-card.png";
import { fetchTrack } from "../features/player/playerSlice";
const   TopResults = ({data}) => {
  const dispatch = useDispatch();
  return (
    <div >
    <p className="text-4xl mt-16 text-white font-semibold">TopResults</p>
    <div className="md:max-w-[523px] md:max-h-[303px] w-fit overflow-hidden rounded-3xl relative mt-7 "  onClick={()=>dispatch(fetchTrack(data.href))}>
      <img
        src={data.images[0].url}
        alt=""
        className="w-auto transform transition-transform duration-1000 hover:scale-110 hover:cursor-pointer"
      />
      <div className="absolute bottom-0 md:h-[93px] bg-[#151515] w-full bg-opacity-60">
        <p  className="m-auto md:text-4xl text-xl p-2 md:p-6">{data.name}</p>
      </div>
    </div>
  </div>
  
  );
};

export default TopResults;
