import React from "react";
import { connect } from "react-redux";
import { DecAction, IncAction } from "./action";

const App = (local_variable) => {
  return (
    <div>
      <h1>{local_variable}</h1>
      <button onClick={() => IncAction(5)}>INCREMENT</button>
      <button onClick={DecAction}>DECREMENT</button>
    </div>
  );
};
const mapStateToProps = (state) => ({ local_variable: state });

export default connect(mapStateToProps, { IncAction, DecAction })(App);
