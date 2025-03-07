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
    <div className="fixed z-50 w-full bg-white">
      <div className="relative flex flex-row items-center justify-between w-full px-5 py-3 lg:container lg:mx-auto lg:px-0">
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
        {/* humbuger icon */}

        <div>
          <IoMdMenu onClick={handleClick} className="text-3xl md:hidden" />
        </div>

        {/* mobile nav */}
        {show && (
          <div className="absolute left-0 right-0 flex flex-col w-full px-5 text-white shadow top-16">
            <div className="flex flex-col h-full rounded-lg p-7 bg-blue-950 gap-y-7">
              <button className="font-semibold hover:font-bold">
                Features
              </button>
              <button className="font-semibold hover:font-bold">Pricing</button>
              <button className="font-semibold hover:font-bold">
                Resources
              </button>
              <button className="font-semibold hover:font-bold">Login</button>
              <button className="py-1.5 px-4 bg-cyan-600 text-white font-bold rounded-3xl">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
