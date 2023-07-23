import logo from "../assets/logo.png";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { FaLock } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { auth } from "../../AuthorizationPage";


import { useEffect } from "react";




const params = new URLSearchParams(window.location.search);
const code = params.get('code');



const initialValues = {
  email: "",
  password: "",
};



const Login = () => {

  useEffect(() => {
    const test = async() => { 
    if(code){
      const user  = await auth();
      console.log(user);
    
    }
   
    }
    test();
    return () => {
     
    }
  }, [])
  
    
  
  
  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: () => {
      auth();
    },
  });
  return (
    <div className="flex justify-center items-center h-full w-full text-white ">
      <div className=" bg-[#242424] p-10 rounded-md flex justify-center items-center gap-8 flex-col ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <p className="md:self-start text-3xl">Login</p>
        <form onSubmit={handleSubmit} className="flex gap-6 flex-col">
          <div className="flex justify-start items-center bg-[#0F0F0F]  md:w-[80vh] p-3 rounded-full gap-2">
            <label htmlFor="email">
              <BiUserCircle className="text-2xl mx-1" />
            </label>
            <input
              className="rounded-xl pl-1 outline-none md:w-full bg-transparent  placeholder:text-lg placeholder:font-semibold placeholder:opacity-50 "
              type="email"
              name="email"
              id="email"
              placeholder="Username"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email && errors.email}
          <div className=" flex justify-start items-center  bg-[#0F0F0F] md:w-[80vh] p-3 rounded-full gap-2">
            <label htmlFor="password">
              <FaLock className="text-md mx-2 " />
            </label>
            <input
              className=" outline-none  bg-transparent w-full  placeholder:text-lg placeholder:font-semibold placeholder:opacity-50 "
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.password && touched.password && errors.password}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#1ED760] px-6 py-2 rounded-full self-center  "
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
