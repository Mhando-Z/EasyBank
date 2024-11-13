import { createContext } from "react";

const DataContex = createContext();

function DataContextProvider({ children }) {
  return <DataContex.Provider>{children}</DataContex.Provider>;
}

export default DataContextProvider;
