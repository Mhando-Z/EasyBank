import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
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
  const [show, setShow] = useState(false);

  // total sum of all items in cart
  const total = cartData.reduce((acc, item) => acc + item.price, 0);

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
      getAllData();
    } catch (error) {
      console.error(`Failed to delete item with id ${id}:`, error);
    }
  };

  // set show coursel
  const handleShow = () => {
    setShow(true);
  };

  // clear all data from indexdb
  const clearAllData = async () => {
    const db = await dbPromise;
    try {
      await db.clear("myStore");
      console.log("All data cleared successfully.");
    } catch (error) {
      console.error("Failed to clear all data:", error);
    }
  };

  const handleClear = () => {
    clearAllData();
    getAllData();
    setShow(false);
  };

  if (!data || data?.length === 0) {
    return (
      <div className="container flex items-center justify-center min-h-screen mx-auto">
        <h1>Loading.....</h1>
      </div>
    );
  }
  return (
    <div
      className={`relative flex flex-col min-h-screen px-5  ${
        show ? "" : "md:mt-5 xl:container xl:mx-auto"
      }  `}
    >
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
        <div className="flex w-[550px] flex-col gap-y-5">
          <div className="bg-white flex flex-col  h-[500px] overflow-y-auto rounded-2xl px-5 ">
            <h1 className="py-5 text-2xl font-bold text-orange-600 bg-white ">
              Your Cart ({cartData?.length})
            </h1>

            <div className="flex flex-col gap-3 mt-5 ">
              {cartData?.map((dt) => {
                return (
                  <div
                    key={dt.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h1 className="font-bold ">{dt.name}</h1>
                      <p>$ {dt?.price}</p>
                    </div>
                    <div>
                      <RxCrossCircled
                        onClick={() => deleteData(dt?.id)}
                        className="text-xl cursor-pointer hover:text-red-600"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* total sum */}
          <div className="bg-white px-5 h-[100px] border-t border-slate-500 mt-2">
            <div className="flex flex-row items-center justify-between mt-3">
              <h1 className="font-medium">Order Total</h1>
              <h1 className="font-bold">$ {total}</h1>
            </div>
            <div className="items-center w-full py-2 mt-4 text-center text-white bg-red-600 cursor-pointer rounded-3xl ">
              <h1 onClick={handleShow} className="font-bold">
                Confirm Order
              </h1>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center min-h-screen bg-black bg-opacity-35">
            <div className="w-[500px] p-10 bg-white rounded-2xl">
              <div className="flex flex-col">
                <IoCheckmarkCircleOutline className="text-5xl text-green-600" />
                <h1 className="text-3xl font-bold">Order Confirmed</h1>
              </div>
              <div className="flex flex-col gap-3 mt-5 h-[400px] overflow-y-auto ">
                {cartData?.map((dt) => {
                  return (
                    <div
                      key={dt.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <img src={dt?.image} alt="poster" className="h-20" />
                      </div>
                      <div>
                        <h1 className="font-bold ">{dt.name}</h1>
                        <p>$ {dt?.price}</p>
                      </div>
                      <div>
                        <RxCrossCircled
                          onClick={() => deleteData(dt?.id)}
                          className="text-xl cursor-pointer hover:text-red-600"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* price confirmation button */}
              <div className="bg-white mt-5 px-5 h-[100px] border-t border-slate-500">
                <div className="flex flex-row items-center justify-between mt-3">
                  <h1 className="font-medium">Order Total</h1>
                  <h1 className="font-bold">$ {total}</h1>
                </div>
                <div className="items-center w-full py-2 mt-4 text-center text-white bg-red-600 cursor-pointer rounded-3xl ">
                  <h1 onClick={handleClear} className="font-bold">
                    Start new Order
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
