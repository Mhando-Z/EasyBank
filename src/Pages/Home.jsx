import React from "react";
// import data from "../lib/data.json";
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
    <div className="container flex flex-col min-h-screen mx-auto md:mt-5">
      <div className="px-6 mb-10">
        <h1 className="text-4xl font-bold">Desserts</h1>
      </div>
      <div className="flex flex-col gap-10 px-6 md:flex-row">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {data?.map((dt, index) => {
            return (
              <div key={index}>
                <ProductCard data={dt} />
              </div>
            );
          })}
        </div>
        <div>{/* cart section */}</div>
      </div>
    </div>
  );
}

export default Home;
