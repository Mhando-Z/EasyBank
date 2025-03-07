import React, { useState } from "react";
import BoxCard from "./BoxCard";
import { motion } from "framer-motion";
// image import
import mage from "../assets/images/illustration-working.svg";
import mage2 from "../assets/images/bg-shorten-desktop.svg";
import mage3 from "../assets/images/bg-boost-desktop.svg";
// icon import
import icon1 from "../assets/images/icon-detailed-records.svg";
import icon2 from "../assets/images/icon-brand-recognition.svg";
import icon3 from "../assets/images/icon-fully-customizable.svg";

function HeroSect() {
  const [url, setUrl] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([
    {
      original: "https://www.frontendmentor.io",
      shortened: "https://rel.ink/k4lKyk",
      copied: false,
    },
    {
      original: "https://twitter.com/frontendmentor",
      shortened: "https://rel.ink/gxOXp9",
      copied: true,
    },
    {
      original: "https://www.linkedin.com/company/frontend-mentor",
      shortened: "https://rel.ink/gob3X9",
      copied: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;

    // In a real app, you would call an API here
    const newLink = {
      original: url,
      shortened: `https://rel.ink/${Math.random().toString(36).substr(2, 6)}`,
      copied: false,
    };

    setShortenedLinks([newLink, ...shortenedLinks]);
    setUrl("");
  };

  const handleCopy = (index) => {
    // Create a new array with the updated copied status
    const newLinks = shortenedLinks.map((link, i) => ({
      ...link,
      copied: i === index,
    }));

    // Copy to clipboard
    navigator.clipboard.writeText(shortenedLinks[index].shortened);

    setShortenedLinks(newLinks);
  };

  return (
    <div className="flex flex-col mt-20 ">
      <div className="flex flex-col px-4 md:container md:mx-auto md:px-0 ">
        {/* first section */}
        <div className="flex flex-col-reverse items-center justify-between md:flex-row ">
          {/* text section */}
          <div className="flex flex-col w-full mt-10 text-center md:text-left ">
            <h1 className="max-w-md text-5xl font-bold md:text-6xl ">
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
        <div className="relative h-[180px] md:h-[120px]  rounded mt-20  bg-blue-950 ">
          <img
            src={mage2}
            alt="shortly pic"
            className="object-cover h-full rounded outline-none "
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center ">
            <div className="flex flex-col w-full gap-3 px-5 md:px-10 md:flex-row md:items-center">
              <input
                value={url}
                placeholder="Shorten a link here..."
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                className="w-full py-2"
              />

              <button
                onClick={handleSubmit}
                className="py-2 font-bold text-white md:w-44 px-7 bg-cyan-400"
              >
                Shorten It!
              </button>
            </div>
            {!url && (
              <p className="px-5 mt-2 italic md:px-10 text-rose-500">
                Please add a link
              </p>
            )}
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="-mt-12 bg-gray-200 h-[1930px] md:h-full ">
        <div className="px-4 mt-20 space-y-4 md:container md:mx-auto md:px-0">
          {shortenedLinks.map((link, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-4 bg-white rounded-lg shadow md:flex-row md:items-center md:justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="pb-3 mr-4 text-gray-800 truncate border-b border-gray-200 md:pb-0 md:border-b-0">
                {link.original}
              </p>
              <div className="flex flex-col gap-3 mt-3 md:flex-row md:items-center md:mt-0">
                <span className="font-medium text-teal-500">
                  {link.shortened}
                </span>
                <motion.button
                  onClick={() => handleCopy(index)}
                  className={`py-2 px-6 rounded-lg font-bold text-white ${
                    link.copied
                      ? "bg-purple-900"
                      : "bg-teal-400 hover:bg-teal-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.copied ? "Copied!" : "Copy"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 px-5 mt-32 mb-16 text-center md:mb-0">
          <h1 className="text-4xl font-bold">Advanced Statistics </h1>
          <p className="max-w-md text-gray-400 md:text-center">
            frack how your tinks are pertamning dorast the web with our
            odvaricod stutistics shbooOTE
          </p>
        </div>
        <div className="flex md:container md:mx-auto px-4 md:px-0  flex-col  relative  h-[500px] ">
          {/* horizontal line */}
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
            <div className="hidden w-full h-3 bg-cyan-500 md:flex"></div>
            <div className="flex w-3 h-full md:hidden bg-cyan-500"></div>
          </div>

          {/* cards */}
          <div className="absolute top-0 bottom-0 flex flex-col items-center justify-between h-full gap-10 md:flex-row">
            {/* first cards */}
            <BoxCard
              icon={icon2}
              title={"Brand Recognition"}
              description={
                "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
              }
            />
            {/* second card */}
            <div className="md:mt-28">
              <BoxCard
                icon={icon1}
                title={"Detailed Records"}
                description={
                  "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                }
              />
            </div>
            <div className="md:mt-44">
              {/* third caord */}
              <BoxCard
                icon={icon3}
                title={"Fully Customizable"}
                description={
                  "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* fourth section */}
      <div className="h-[330px] relative bg-blue-950">
        <img
          src={mage3}
          alt="stricly pic"
          className="object-cover w-full h-full "
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center ">
          <h1 className="text-3xl font-bold text-white md:text-6xl">
            Boost your links today{" "}
          </h1>
          <button className="px-10 py-3 mt-6 text-xl font-bold text-white hover:bg-cyan-600 rounded-3xl bg-cyan-400">
            get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSect;
