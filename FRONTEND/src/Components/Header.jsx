import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo-white.png";

const Header = () => {
  return (
    <nav className=" h-[90px] flex justify-between items-center p-2 bg-black ">
      <div className="flex  gap-12 items-center ml-8 ">
        <img src={logo} className=" h-16 w-[60px] md:w-[115px]  object-cover" />
        <Link className="text-white" to="/">
          <span className="text-white hover:text-red-700 hover:underline">
            Home
          </span>
        </Link>

        <Link className="text-white" to="/">
          <span className="text-white hover:text-red-700 hover:underline">
            About
          </span>
        </Link>

        <Link className="text-white" to="/">
          <span className="text-white hover:text-red-700 hover:underline">
            Services
          </span>
        </Link>
      </div>
      <div className="flex gap-12 items-center mr-4 pr-4">
        <Link
          className=" text-black font-bold py-2 px-4 rounded-lg inline-block bg-red-600 hover:bg-green-800"
          to="/login"
        >
          Sign in
        </Link>
        <Link
          className=" text-white font-bold py-2 px-4 rounded-lg inline-block bg-red-600 hover:bg-green-800"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
