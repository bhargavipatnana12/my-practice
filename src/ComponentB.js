import React from "react";
import { useContext } from "react";
import { store } from "./App";
const ComponentB = () => {
  const [data, setData] = useContext(store);
  return (
    <div className="card" style={{ width: "300px" }}>
      <div className="card-body">Im from component B {data}</div>
    </div>
  );
};

export default ComponentB;
