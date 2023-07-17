import { IoMdPlay } from "react-icons/io";
import Frame from "../assets/Frame.png";
const Searchlist = () => {
  return (
    <div className=" h-[81px] flex justify-between items-center gap-4 py-3 px-[20px]">
      <div className=" flex justify-between align-center">
        <div className="min:w-[58px] h-[58px]">
          <img src={Frame} alt="" />
        </div>
        <div className="pl-4">
          <p className="text-lg">Song #1</p>
          <p className="text-sm opacity-50">Artist names</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[87px] text-lg">
        <p>4.16</p>
        <div>
          <IoMdPlay />
        </div>
      </div>
    </div>
  );
};

export default Searchlist;
