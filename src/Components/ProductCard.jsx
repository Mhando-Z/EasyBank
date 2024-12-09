import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { AiTwotonePlusCircle } from "react-icons/ai";
import { RxMinusCircled } from "react-icons/rx";
import { motion } from "framer-motion";
const { v4: uuidv4 } = require("uuid");

function ProductCard({ data, setSelect, addData }) {
  const handleSelection = (Pdata) => {
    const Sdata = {
      id: uuidv4(),
      ...Pdata,
    };
    setSelect(Sdata);
  };

  return (
    <motion.div>
      <div className="flex flex-col items-center justify-center">
        <motion.img
          src={data?.image}
          alt="picha"
          className="object-cover rounded-xl"
        />
        <div className="flex group hover:bg-red-600 mt-[-20px] justify-center  border border-gray-400 items-center w-[160px]  rounded-3xl px-2 py-2 bg-white ">
          <motion.div
            className="flex items-center gap-1 cursor-pointer group-hover:hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <MdAddShoppingCart className="text-orange-600" />
            <h1 className="font-bold">Add to Cart</h1>
          </motion.div>
          <div className="flex-row items-center justify-between hidden w-full group-hover:flex">
            <motion.div
              className="px-2 font-bold text-white text-md"
              whileTap={{ scale: 0.9 }}
            >
              <RxMinusCircled className="text-lg cursor-pointer" />
            </motion.div>

            <div className="font-bold text-white">
              <p>1</p>
            </div>

            <motion.div
              onClick={addData}
              className="px-2 font-bold text-white text-md"
              whileTap={{ scale: 0.9 }}
            >
              <AiTwotonePlusCircle
                onClick={() => handleSelection(data)}
                className="text-lg cursor-pointer"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* other details */}
      <div className="flex flex-col mt-4">
        <h2 className="text-gray-600">{data?.category}</h2>
        <h2 className="font-bold text-gray-800 text-md">{data?.name}</h2>
        <h2 className="font-bold text-orange-600">${data?.price}</h2>
      </div>
    </motion.div>
  );
}

export default ProductCard;
