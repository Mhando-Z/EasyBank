import React from "react";
import { motion } from "framer-motion";

const BoxCard = ({ icon, title, description }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex items-center justify-center px-5 py-4 md:px-2 ">
      <motion.div
        className="flex flex-col gap-6 text-center md:flex-row md:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative flex flex-col items-center justify-center flex-1 p-10 bg-white rounded-lg shadow-lg md:block"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="absolute flex items-center justify-center w-16 h-16 text-2xl rounded-full bg-blue-950 text-cyan-400 -top-8 md:left-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <img src={icon} alt="logo" className="object-cover" />
          </motion.div>
          <div className="mt-8">
            <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BoxCard;
