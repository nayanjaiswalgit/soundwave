import React from "react";
import Card from "./Card";

const Playlist = () => {
  return (
    <div className="w-auto overflow-hidden">
    <div className="flex justify-between items-center mb-7 text-2xl">  <p className="">Featured playlist</p>
      <button className="text-[#1ED760] text-xl">See All</button></div>
      <div className="flex overflow-hidden gap-5 w-fit">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Playlist;
