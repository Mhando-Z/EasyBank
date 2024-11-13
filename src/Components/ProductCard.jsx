import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

function ProductCard({ data }) {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <img
          src={data?.image}
          alt="picha"
          className="object-cover rounded-xl"
        />
        <div className="flex mt-[-20px] justify-center  border-2 border-gray-400 items-center w-[160px]  rounded-3xl px-2 py-2 bg-white ">
          <div className="flex items-center gap-1 ">
            <MdAddShoppingCart className="text-orange-600" />
            <h1 className="font-bold">Add to Cart</h1>
          </div>
        </div>
      </div>
      {/* other details */}
      <div className="flex flex-col mt-4">
        <h2 className="text-gray-600">{data?.category}</h2>
        <h2 className="font-bold text-gray-800 text-md">{data?.name}</h2>
        <h2 className="font-bold text-orange-600">${data?.price}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
