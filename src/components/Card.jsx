import cart_img from "../assets/cartimg.png";
const Card = () => {
  return (
    <div className="w-[317px] h-[328px] bg-[#242424] rounded-2xl overflow-hidden cursor-pointer">
      <div className="h-56">
        <img src={cart_img} alt="" />
      </div>
      <div className="m-auto w-full px-6  ">
        <h2 className="text-xl">Playlist #1</h2>
        <p className="text-xs opacity-50 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus
          enim varius nec malesuada.
        </p>
      </div>
    </div>
  );
};

export default Card;
