import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalProvider from "./context/GlobalContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalProvider>
);
