import { createContext, useState } from "react";
const { v4: uuidv4 } = require("uuid");

const DataContex = createContext();

function DataContextProvider({ children }) {
  // simple Logic
  const [rows, setRows] = useState([
    {
      id: uuidv4(),
      category: 1,
      image: "",
      name: "",
      price: "",
    },
  ]);

  const addRow = () => {
    const newRow = {
      id: uuidv4(),
      category: 1,
      image: "",
      name: "",
      price: "",
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };
  return <DataContex.Provider>{children}</DataContex.Provider>;
}

export default DataContextProvider;
