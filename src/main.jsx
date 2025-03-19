import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"
import ProductPage from "./components/ProductPage.jsx"
import ProductE from "./components/ProductE.jsx"
import Auth from "./Auth"
import { Provider } from "react-redux";
import store from "./redux/store";
import OrderPlace from "./components/OrderPlace";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Home" element={<App />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/ProductE" element={<ProductE />} />
        <Route path="/OrderPlace" element={<OrderPlace />} />


      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
