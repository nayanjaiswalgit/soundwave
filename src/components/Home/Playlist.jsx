import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Playlist = ({ playlist, Name }) => {
  const [seeAll, setSeeAll] = useState(false);

  return (
    <div className=" w-full mt-[44px] overflow-hidden">
      <div className="flex justify-between items-center mb-7 text-2xl ">
        <p className="">{Name}</p>
        <button
          className="text-[#1ED760] text-xl "
          onClick={() => setSeeAll((prev) => !prev)}
        >
          {seeAll ? "close" : "See All"}
        </button>
      </div>
      <div className={` flex  md:gap-5 gap-3  w-fit ${seeAll && "flex-wrap"}`}>
        {playlist?.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.array,
  Name: PropTypes.string.isRequired,
};
export default Playlist;
