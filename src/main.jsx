
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import "./index.css";
import Cart from "./components/Cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    {/* <Cart/> */}
  </Provider>
);
