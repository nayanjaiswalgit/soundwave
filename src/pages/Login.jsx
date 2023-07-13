import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full w-screen absolute ">
      <div className=" bg-[#242424] p-10 rounded-md flex justify-around items-center flex-col w-[842px] h-[531px]">
        <div>
      
          <img src={logo} alt="logo" />
        </div>
        <p>Login</p>
        <div className=" flex flex-col">
          <input type="text" name="" id="" />
          <input type="password" name="" id="" />
        </div>
        <button
          className="items-center justify-center  bg-[#1ED760] py-2 px-5 rounded-full ;
"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
