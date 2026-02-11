import React, { useState } from "react";
import { createContext } from "react";
import Count from "./Count";
import Display from "./Display";
export const store = createContext();
const App = () => {
  const [data, setData] = useState([
    {
      brandName: "NOKIA",
    },
    {
      brandName: "MOTO",
    },
    {
      brandName: "SAMSUNG",
    },
  ]);
  return (
    <store.Provider value={[data, setData]}>
      <center>
        <Count />
        <Display />
      </center>
    </store.Provider>
  );
};

export default App;
