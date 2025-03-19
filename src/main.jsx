import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"
import ProductPage from "./components/ProductPage.jsx"
import ProductE from "./components/ProductE.jsx"
import Auth from "./Auth"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Home" element={<App />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/ProductE" element={<ProductE />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
