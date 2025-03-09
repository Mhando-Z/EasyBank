import React from "react";
import logo from "../assets/images/logo.svg";
// icon import
import { IoMdMenu } from "react-icons/io";

function NavBar() {
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="fixed z-50 w-full bg-white ">
      <div className="relative flex flex-row items-center justify-between w-full px-5 py-3 lg:container lg:mx-auto lg:px-0">
        {/* logo and nav links*/}
        <div className="flex items-center gap-x-5">
          <img src={logo} alt="shortly logo" className="h-6" />
        </div>
        <div className="flex-row items-center hidden gap-x-4 md:flex">
          <button className="h-full font-semibold hover:border-black hover:border-b-2 ">
            Home
          </button>
          <button className="font-semibold">About</button>
          <button className="font-semibold">Contact</button>
          <button className="font-semibold">Blog</button>
          <button className="font-semibold">Career</button>
        </div>
        {/* nav links */}
        <div className="items-center hidden md:flex gap-x-4">
          <button className="px-4 py-2 font-bold text-white bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl">
            Request invite
          </button>
        </div>
        {/* humbuger icon */}

        <div className="md:hidden">
          <IoMdMenu onClick={handleClick} className="text-3xl md:hidden" />
        </div>

        {/* mobile nav */}
        {show && (
          <div className="absolute left-0 right-0 flex flex-col w-full px-5 shadow top-16">
            <div className="flex flex-col h-full bg-white rounded-lg p-7 gap-y-7">
              <button className="font-semibold hover:font-bold">Home</button>
              <button className="font-semibold hover:font-bold">About</button>
              <button className="font-semibold hover:font-bold">Contact</button>
              <button className="font-semibold hover:font-bold">blog</button>
              <button className="font-semibold hover:font-bold">Career</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
