import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/animated-headline.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/style.css";
import "./assets/sass/style.scss";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
