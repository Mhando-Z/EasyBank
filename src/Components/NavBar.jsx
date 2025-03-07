import React from "react";
import logo from "../assets/images/logo.svg";

function NavBar() {
  return (
    <div className="fixed z-50 w-full bg-white">
      <div className="flex flex-row items-center justify-between w-full px-5 py-3 lg:container lg:mx-auto lg:px-0">
        {/* logo and nav links*/}
        <div className="flex items-center gap-x-5">
          <img src={logo} alt="shortly logo" className="h-6" />
          <div className="flex-row items-center hidden gap-x-4 md:flex">
            <button className="font-semibold hover:font-bold ">Features</button>
            <button className="font-semibold hover:font-bold ">Pricing</button>
            <button className="font-semibold hover:font-bold ">
              Resources
            </button>
          </div>
        </div>
        {/* nav links */}
        <div className="items-center hidden md:flex gap-x-4">
          <button className="font-semibold hover:font-bold">Login</button>
          <button className="py-1.5 px-4 bg-cyan-600 text-white font-bold rounded-3xl">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
