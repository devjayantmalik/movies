import React from "react";
import Router from "./routers";
import { Provider } from "react-redux";
import createStore from "./services/store";

const Root = () => (
  <Provider store={createStore()}>
    <Router />
  </Provider>
);

export default Root;
