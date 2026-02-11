import React, { use } from "react";
import { useContext } from "react";
import { store } from "./App";
const Display = () => {
  const [data, setData] = useContext(store);
  return (
    <div className="card">
      <div className="card-body">
        <h3>
          {data.map((item) => (
            <h3 className="card-title">{item.brandName}</h3>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default Display;
