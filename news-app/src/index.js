import React from "react";
import ReactDOM from "react-dom/client";

//import app css
import "./assets/css/index.css";

//components used
import App from "./App";

const appMount = ReactDOM.createRoot(document.getElementById("app-mount"));

appMount.render(
  <App />
);