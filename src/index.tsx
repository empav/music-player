import React from "react";
import ReactDOM from "react-dom/client";

import "./fonts/Caveat-Regular.ttf";
import "./fonts/Caveat-SemiBold.ttf";

import "./index.module.css";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
