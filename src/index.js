import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalProvider from "./context/GlobalContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
