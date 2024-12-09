import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { RxCrossCircled } from "react-icons/rx";
import data from "../lib/datas";

import { openDB } from "idb";

const dbPromise = openDB("MyDatabase", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("myStore")) {
      db.createObjectStore("myStore", { keyPath: "id" }); // 'id' is the key
    }
  },
});

function Home() {
  const [selected, setSelect] = useState([]);
  const [cartData, setCart] = useState([]);

  // adding data
  const addData = async () => {
    if (!selected.id) {
      console.error("Selected item must have an 'id' property.");
      return;
    }
    const db = await dbPromise;
    try {
      await db.add("myStore", selected);
      console.log("Data added successfully");
    } catch (error) {
      console.error("Failed to add data:", error);
    }
  };

  // Retrieving data
  const getAllData = async () => {
    const db = await dbPromise;
    try {
      const data = await db.getAll("myStore");
      setCart(data);
      return data;
    } catch (error) {
      console.error("Failed to retrieve data:", error);
    }
  };

  useEffect(() => {
    getAllData();
  }, [selected]);

  // delete data
  const deleteData = async (id) => {
    const db = await dbPromise;
    try {
      await db.delete("myStore", id);
      console.log(`Item with id ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete item with id ${id}:`, error);
    }
  };

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
                <ProductCard
                  addData={addData}
                  setSelect={setSelect}
                  data={dt}
                />
              </div>
            );
          })}
        </div>
        {/* cart section */}
        <div className="bg-white w-[550px] h-[500px] rounded-2xl p-5 ">
          <h1 className="text-2xl font-bold text-orange-600">
            Your Cart ({cartData?.length})
          </h1>
          <div className="flex flex-col gap-3 mt-4">
            {cartData?.map((dt) => {
              return (
                <div key={dt.id} className="flex items-center justify-between">
                  <div>
                    <h1 className="font-bold ">{dt.name}</h1>
                    <p>$ {dt?.price}</p>
                  </div>
                  <div>
                    <RxCrossCircled className="text-xl cursor-pointer hover:text-red-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
