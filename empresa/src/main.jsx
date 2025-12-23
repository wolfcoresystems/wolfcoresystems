import { HelmetProvider } from "react-helmet-async";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </HelmetProvider>
);
