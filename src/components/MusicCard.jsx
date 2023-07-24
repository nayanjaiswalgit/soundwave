
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { add } from '../features/player/playerSlice';

const MusicCard = ({data}) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[317px] h-[328px] bg-[#242424] rounded-2xl  cursor-pointer relative "  onClick={()=>dispatch(add(data.track))}>
      <div className="  overflow-hidden w-full">
        <img src={data?.track?.album?.images[0]?.url} alt="" className="w-full rounded-2xl  "/>
      </div>
      <div className="m-auto w-full p-6  bg-[#242424] absolute bottom-1 left-0 right-0 rounded-b-xl">
        <h2 className="text-xl">{data?.track.name}</h2>
        <p className="text-xs opacity-50 mt-2">
        { data?.track?.artists[0].name }
        </p>
      </div>
    </div>
  );
};
MusicCard.propTypes = {
  data: PropTypes.object,

};
export default MusicCard;
