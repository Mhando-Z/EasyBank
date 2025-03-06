import React from "react";
// image import
import mage from "../assets/images/illustration-working.svg";
import mage2 from "../assets/images/bg-shorten-desktop.svg";

function HeroSect() {
  return (
    <div className="flex flex-col mt-20 ">
      <div className="flex flex-col px-4 md:container md:mx-auto md:px-0 ">
        {/* first section */}
        <div className="flex flex-col-reverse items-center justify-between md:flex-row ">
          {/* text section */}
          <div className="flex flex-col w-full ">
            <h1 className="max-w-md text-4xl font-bold md:text-6xl ">
              More than just shorter links
            </h1>
            <p className="max-w-md mt-3 text-gray-400">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <div>
              <button className="py-2 mt-4 font-bold text-white hover:bg-cyan-600 px-7 rounded-3xl bg-cyan-300">
                get started
              </button>
            </div>
          </div>
          {/* image section */}
          <div className="w-full">
            <img src={mage} alt="shortly pic" className="w-full h-auto" />
          </div>
        </div>
        {/* second section */}
        <div className="relative h-[120px] rounded-xl mt-20  bg-blue-950 ">
          <img
            src={mage2}
            alt="shortly pic"
            className="object-cover h-full outline-none rounded-xl "
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center ">
            <div className="flex flex-col w-full gap-3 px-10 md:flex-row md:items-center">
              <input type="text" className="w-full py-2" />
              <button className="py-2 font-bold text-white px-7 bg-cyan-400">
                search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="-mt-12 bg-gray-200 ">
        <div className="flex flex-col items-center gap-2 mt-28 ">
          <h1 className="text-4xl font-bold">Advanced Statistics </h1>
          <p className="max-w-md text-gray-400 md:text-center">
            frack how your tinks are pertamning dorast the web with our
            odvaricod stutistics shbooOTE
          </p>
        </div>
        <div className="flex container mx-auto flex-col relative mt-16 h-[500px] ">
          {/* horizontal line */}
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
            <div className="w-full h-3 bg-cyan-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSect;
