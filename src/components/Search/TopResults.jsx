import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { fetchTrack } from "../../slices/playerSlice";
const TopResults = ({ data, name }) => {
  return (
    <div>
      <p className="md:text-4xl text-2xl mt-4  md:mt-0 text-white font-semibold">
        {name}
      </p>
      <div className="flex items-center gap-4  overflow-scroll  py-2 md:overflow-x-scroll  ">
        {data.map((artist, index) => (
          <div key={index}>
            {" "}
            <ArtistList key={index} artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopResults;

TopResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      ),
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
};

const ArtistList = ({ artist }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="md:max-w-[523px] w-44  h-48 md:w-96 md:h-[350px] md:my-2  overflow-x-hidden overflow-hidden rounded-3xl relative md:mt-7 mt-4 "
      onClick={() => dispatch(fetchTrack(artist?.href))}
    >
      <div className=" w-44 h-44 md:h-[90%] md:w-[100%] overflow-hidden">
        <img
          src={artist?.images[0]?.url}
          alt=""
          className="md:w-auto  transform object-scale-down transition-transform duration-1000 hover:scale-110 hover:cursor-pointer rounded-2xl"
        />
      </div>
      <div className="absolute -bottom-1 md:h-[93px] bg-[#151515] w-full  ">
        <p className="m-auto md:text-4xl text-xl p-2 md:p-6 whitespace-nowrap">
          {artist?.name}
        </p>
      </div>
    </div>
  );
};

ArtistList.propTypes = {
  artist: PropTypes.shape({
    href: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
    name: PropTypes.string.isRequired,
  }).isRequired,
};
