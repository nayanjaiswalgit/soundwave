import Searchlist from "./Searchlist";

import PropTypes from "prop-types";

const SearchResult = ({ data }) => {
  return (
    <div className="md:mt-12 font-semibold mt-6">
      <p className="md:text-4xl text-2xl">Songs</p>
      <div className="overflow-y-auto md:mt-6 mt-2 ">
        {data.map((track, index) => (
          <Searchlist key={index} track={track} />
        ))}
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      album: PropTypes.shape({
        images: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
          })
        ).isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
      artists: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
      duration_ms: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default SearchResult;
