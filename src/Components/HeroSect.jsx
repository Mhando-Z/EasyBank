import React from "react";
// image import
import mage from "../assets/images/illustration-working.svg";

function HeroSect() {
  return (
    <div className="flex flex-col px-4 mt-20 md:container md:mx-auto md:px-0">
      <div className="flex flex-col-reverse items-center justify-between md:flex-row ">
        {/* text section */}
        <div className="flex flex-col w-full ">
          <h1 className="max-w-md text-4xl font-bold md:text-6xl ">
            More than just shorter links
          </h1>
          <p className="max-w-md mt-3 text-gray-400">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <div>
            <button className="py-2 mt-4 font-bold text-white px-7 rounded-3xl bg-cyan-300">
              get started
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="w-full">
          <img src={mage} alt="shortly pic" className="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSect;
