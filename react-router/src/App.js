import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Friends from "./Components/Friends/Friends";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="friends" element={<Friends />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>      
    </>
  );
}

export default App;
