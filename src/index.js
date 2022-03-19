import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
