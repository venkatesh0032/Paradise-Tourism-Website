// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./content/AuthContext"; // ✅ Correct import
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* ✅ Wrap with Auth context */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
