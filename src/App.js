import React from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "./redux/cartRedux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  user ? console.log(user.username) : console.log("user is not logged in");
  const dispatch = useDispatch();
  useEffect(() => {
    user && dispatch(getCart());
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/men" element={<Products />} />
        <Route path="/products/women" element={<Products />} />
        <Route path="/favorites/:id" element={<Products />} />
        <Route path="/products/new" element={<Products />} />
        <Route path={"/cart/:id"} element={<Cart />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
