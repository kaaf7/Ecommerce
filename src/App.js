import React from "react";
import Cart from "./pages/Cart";
import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";
 
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}

export default App;
