import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Meals from "./Components/Meals/Meals";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import MealDetails from "./Components/MealDetails/MealDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/meal/:mealId" element={<MealDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
