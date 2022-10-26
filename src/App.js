import React from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Products from"./pages/Products"

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="product/:id" element={<ProductPage/>}/>
      <Route path="/products/:category" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
