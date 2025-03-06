import React from "react";
// image import
import mage from "../assets/images/illustration-working.svg";

function HeroSect() {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-col-reverse items-center justify-between md:flex-row ">
        {/* text section */}
        <div className="container flex flex-col mx-auto">
          <h1 className="max-w-md text-4xl font-bold md:text-6xl ">
            More than just shorter links{" "}
          </h1>
          <p className="max-w-md mt-2 text-gray-300">
            Build your brand's recognition and get detailed insights on how your
            links are performing{" "}
          </p>
        </div>
        {/* image section */}
        <div>
          <img src={mage} alt="shortly pic" className="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSect;
