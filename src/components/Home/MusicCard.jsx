
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { add } from '../../slices/playerSlice';

const MusicCard = ({data}) => {
  const dispatch = useDispatch();

  return (
    <div className=" w-[calc((100vw/2)-2rem)] md:w-[317px] md:h-[328px] bg-[#242424] rounded-2xl  cursor-pointer relative hover:bg-[#343333] hover:drop-shadow-2xl hover:opacity-80"  onClick={()=>dispatch(add(data.track))}>
      <div className="  overflow-hidden w-full">
        <img src={data?.track?.album?.images[0]?.url} alt="" className="w-full rounded-2xl  "/>
      </div>
      <div className="m-auto w-full md:p-6 p-2  bg-[#242424] absolute bottom-0 left-0 right-0 rounded-b-xl">
        <h2 className="md:text-xl">{data?.track.name}</h2>
        <p className="text-xs opacity-50 md:mt-2 mt-1">
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
