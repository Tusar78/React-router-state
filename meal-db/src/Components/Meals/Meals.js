import React, { useState, useEffect } from "react";
import Meal from "../Meal/Meal";

const Meals = ({ search }) => {
  const BASE_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
    fetch(`${BASE_URL}${search}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals))
  }, [BASE_URL, search])
  return (
    <section className="section w-full pt-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {
            meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Meals;
