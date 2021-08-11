import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import allReducers from "./reducers";

import { Provider } from "react-redux";

const store = createStore(allReducers, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

//const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
