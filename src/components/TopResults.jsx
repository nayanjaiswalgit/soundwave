
import topcart from "../assets/top-card.png";
const TopResults = () => {
  return (
    <div>
    <p className="text-4xl mt-16 text-white font-semibold">TopResults</p>
    <div className="w-[523px] h-[303px] overflow-hidden rounded-3xl relative mt-7">
      <img
        src={topcart}
        alt=""
        className="w-full transform transition-transform duration-1000 hover:scale-110 hover:cursor-pointer"
      />
      <div className="absolute bottom-0 h-[93px] bg-[#151515] w-full bg-opacity-60">
        <p className="m-auto text-4xl p-6">AR Rehman hits</p>
      </div>
    </div>
  </div>
  
  );
};

export default TopResults;
