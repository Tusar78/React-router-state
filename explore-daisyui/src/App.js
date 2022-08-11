import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
