import React from "react";
import { useContext } from "react";
import { store } from "./App";
const ComponentB = () => {
  const [data, setData] = useContext(store);
  return (
    <div>
      <h1>Im from Component B {data}</h1>
    </div>
  );
};

export default ComponentB;
