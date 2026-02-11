import React from "react";
import { useContext } from "react";
import { store } from "./App";

const ComponentA = () => {
  const [data, setData] = useContext(store);
  return (
    <div className="card" style={{ width: "300px" }}>
      <div className="card-body"> Im from component A {data}</div>
    </div>
  );
};

export default ComponentA;
