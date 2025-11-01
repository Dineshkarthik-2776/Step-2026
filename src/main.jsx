import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style/custom.css";

const hidePreloader = () => {
  const el = document.getElementById("preloader");
  if (!el) return;
  el.style.opacity = "0";
  setTimeout(() => el.remove(), 400);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setTimeout(hidePreloader, 0);
