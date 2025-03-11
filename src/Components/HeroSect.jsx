import React from "react";
import { motion } from "framer-motion";
// image import
import mage from "../../src/assets/images/bg-intro-desktop.svg";
import mage2 from "../../src/assets/images/image-mockups.png";

function HeroSect() {
  const simpleBudget = [
    {
      title: "Online Banking ",
      discription:
        " Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: "",
    },
    {
      title: "Simple Budgeting ",
      discription:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      icon: "",
    },
    {
      title: "Fast Onboarding",
      discription:
        " We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      icon: "",
    },
    {
      title: "Open API Manage",
      discription:
        " your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      icon: "",
    },
  ];
  return (
    <motion.div>
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundImage: `url("${mage}")`,
        }}
        className="w-full h-[700px] mt-20 bg-no-repeat bg-contain bg-right relative"
      >
        <div className="container absolute top-0 bottom-0 left-0 right-0 flex flex-col mx-auto md:flex-row">
          <motion.div className="flex flex-col max-w-lg gap-y-3 xl:mt-72 md:mt-72">
            <h1 className="text-5xl font-thin text-center lg:text-6xl md:text-left">
              Next generation digital banking{" "}
            </h1>
            {/* paragraph */}
            <p className="max-w-md mt-3 mb-2 text-gray-400">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more
            </p>
            {/* invite button */}
            <div>
              <button className="py-2 font-bold text-white px-7 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl ">
                Request invite
              </button>
            </div>
          </motion.div>
        </div>
        <div
          style={{
            backgroundImage: `url("${mage2}")`,
          }}
          className="absolute w-[700px] z-20 top-0 right-0 bottom-0 h-[900px]"
        ></div>
      </motion.div>
      {/* second section */}
      <div className=" bg-gray-100 h-[700px]">
        <div className="flex flex-col px-4 md:container md:mx-auto md:px-0">
          {/* text section */}
          <div className="flex flex-col gap-5 mt-28">
            <h1 className="text-4xl ">Why choose Easybank? </h1>
            <p className="max-w-md text-gray-400">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          {/* card section */}
          <div className="flex flex-col px-4 mt-20 md:container md:mx-auto md:px-0">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {simpleBudget?.map((dt, inde) => {
                return (
                  <div className="flex flex-col gap-5">
                    {/* icon section */}
                    <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-400 size-16"></div>
                    {/* text section */}
                    <div className="flex flex-col gap-5">
                      <h1>{dt.title}</h1>
                      <p className="max-w-md text-gray-400">{dt.discription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Articles section */}
      <div className="h-[600px]">
        <div className="flex flex-col px-4 mt-20 md:container md:mx-auto md:px-0">
          <h1 className="text-4xl">Latest Articles</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSect;
