import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { devToolsEnhancer } from "@redux-devtools/extension";
import reducer from "./reducer";

const middleware = [thunk];
const store = configureStore(
  reducer(state, action),
  devToolsEnhancer(applyMiddleware(...middleware)),
);
export default store;
