import { useState } from "react";
import PropTypes from 'prop-types';
import MusicCard from "./MusicCard";

const MusicPlaylist = ({ Featured_playlist, Name }) => {
  const [seeAll, setSeeAll] = useState(false);

  return (
    <div className="max-w-full mt-[44px] overflow-hidden">
      <div className="flex justify-between items-center mb-7 text-2xl">
        <p className="">{Name}</p>
        <button className="text-[#1ED760] text-xl" onClick={() => setSeeAll((prev) => !prev)}>
          {seeAll ? "close" : "See All"}
        </button>
      </div>
      <div
        className={`flex gap-5  ${seeAll ? "flex-wrap" : " " } `}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {Featured_playlist?.map((data, index) => (
          <div key={index} className="w-[317px] h-[328px]">
            <MusicCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

MusicPlaylist.propTypes = {
  Featured_playlist: PropTypes.array,
  Name: PropTypes.string.isRequired,
};

export default MusicPlaylist;
