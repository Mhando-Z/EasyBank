import React, { useState } from "react";
import { motion } from "framer-motion";

const LinkShortener = () => {
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
    <div className="">
      <div className="p-6 mb-8 overflow-hidden bg-purple-900 rounded-lg ">
        <div className="w-full h-full bg-purple-800 rounded-lg opacity-50 ">
          <div className="inset-0 bg-gradient-to-br from-purple-800 to-purple-900"></div>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."
              className="flex-grow p-4 text-lg border-2 border-transparent rounded-lg focus:border-teal-400 focus:outline-none"
              required
            />
            <motion.button
              type="submit"
              className="px-8 py-4 text-lg font-bold text-white bg-teal-400 rounded-lg hover:bg-teal-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shorten It!
            </motion.button>
          </div>
          {!url && (
            <p className="mt-2 italic text-rose-500">Please add a link</p>
          )}
        </form>
      </div>

      <div className="space-y-4">
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
    </div>
  );
};

export default LinkShortener;
