import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./routes/AppRoute";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>
);
