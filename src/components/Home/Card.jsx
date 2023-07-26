import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchTrack } from "../../slices/playerSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div
      className=" w-[calc((100vw/2)-2rem)] md:w-[317px] md:h-[328px]  bg-[#242424] rounded-2xl cursor-pointer relative hover:bg-[#343333] hover:drop-shadow-2xl hover:opacity-80 "
      onClick={() => dispatch(fetchTrack(data.href))}
    >
      <div className="overflow-hidden">
        <img
          src={data?.images[0]?.url}
          alt="playlist_image"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="m-auto w-full md:p-6 p-2 bg-[#242424] absolute bottom-0 md:bottom-1 left-0 right-0 rounded-b-xl overflow-hidden">
        <h2 className="md:text-xl">{data.name}</h2>
        <p className="text-xs opacity-50 md:mt-2 mt-1 whitespace-nowrap overflow-hidden">{data.description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
