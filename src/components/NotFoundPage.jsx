import React from "react";
import { Link } from "react-router-dom";
import pagenotfound from "../../src/assets/giphy.gif"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full h-full">
        <img src={pagenotfound} alt="" className="w-[20%]"/>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="text-xl font-medium text-gray-600 mb-8">
          Oops! Page not found.
        </p>
        <Link
          to="/home"
          className="px-6 py-3 bg-blue-500 rounded-md text-white font-medium transition-colors duration-300 hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
