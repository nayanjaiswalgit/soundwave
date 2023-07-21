
import PropTypes from 'prop-types';

const Card = ({data}) => {

  return (
  
    <div className="w-[317px] h-[328px] bg-[#242424] rounded-2xl  cursor-pointer relative">
      <div className="  overflow-hidden">
        <img src={data?.images[0]?.url} alt="" className="w-full rounded-2xl  "/>
      </div>
      <div className="m-auto w-full p-6  bg-[#242424] absolute bottom-1 left-0 right-0 rounded-b-xl">
        <h2 className="text-xl">{data.name}</h2>
        <p className="text-xs opacity-50 mt-2">
        { data.description }
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.isRequired,

};
export default Card;
