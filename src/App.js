import React from "react";
import { createContext, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
export const store = createContext();
const App = () => {
  const [data, setData] = useState(0);
  return (
    <store.Provider value={[data, setData]}>
      <ComponentA />
      <ComponentB />
      <button onClick={() => setData(data + 1)}>Increment</button>
    </store.Provider>
  );
};

export default App;
