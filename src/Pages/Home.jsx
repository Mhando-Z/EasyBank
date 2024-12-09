import React from "react";
import ProductCard from "../Components/ProductCard";
import data from "../lib/datas";

function Home() {
  if (!data || data?.length === 0) {
    return (
      <div className="container flex items-center justify-center min-h-screen mx-auto">
        <h1>Loading.....</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen px-5 xl:container xl:mx-auto md:mt-5">
      <div className="px-6 mb-10">
        <h1 className="text-4xl font-bold">Desserts</h1>
      </div>
      <div className="flex flex-col gap-10 px-6 md:flex-row">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {data?.map((dt, index) => {
            return (
              <div key={index}>
                <ProductCard data={dt} />
              </div>
            );
          })}
        </div>
        {/* cart section */}
        <div className="bg-white w-[550px] h-[500px] rounded-2xl p-5 ">
          <h1 className="text-2xl font-bold text-orange-600">Your Cart ()</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
