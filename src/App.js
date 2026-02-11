import { useReducer } from "react";
import React from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { Count: state.count + 1 };
    case "decrement":
      return { Count: state.count - 1 };
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <center>
        Count :{state.count}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </center>
    </div>
  );
}
export default App;
