import "./main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import { searchCompanies } from "./Api/api.ts";

// console.log(searchCompanies('nvda'));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
