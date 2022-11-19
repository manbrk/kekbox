import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(app);
