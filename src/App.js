import "./App.css";
import Navbars from "./components/Navbars";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product"
import About from "./components/About";
import Contact from "./components/Contact"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbars/>
      <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      
      
    </>
  );
}

export default App;
