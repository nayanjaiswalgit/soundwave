
import PropTypes from "prop-types";
const DisplayTrack  = ({currentTrack}) => {
  return (
    
    <div className="flex md:justify-center md:items-center items-start justify-start overflow-hidden md:w-auto w-2/3">
      <img src={currentTrack?.album?.images[1]?.url} alt="" className="md:w-20 w-14" />
      <div className="  h-full ml-5 ">
        <p className="text-lg font-semibold whitespace-nowrap ">{currentTrack.album.name}</p>
        <p className="text-sm font-medium my-2  leading-4 whitespace-nowrap">{currentTrack.artists.map(name=>name.name)+" , "}</p>
      </div>
    </div>
  );
};

DisplayTrack.propTypes = {
  currentTrack: PropTypes.shape({
    album: PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};


export default DisplayTrack ;
