import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/animated-headline.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/style.css";
import "./assets/sass/style.scss";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { HelmetProvider } from "react-helmet-async";
import { hydrate } from "react-dom";
import { render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (root.isMounted && root.isMounted()) {
  root.hydrate(
    <CartProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </CartProvider>
  );
} else {
  root.render(
    <CartProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </CartProvider>
  );
}
