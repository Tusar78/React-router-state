import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const BASE_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;
  const { mealId } = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [BASE_URL, mealId]);

  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strTags,
  } = meal;
  return (
    <section className="w-full bg-base-200">
      <div className="hero min-h-screen max-w-screen-lg mx-auto ">
        <div className="hero-content flex-col lg:flex-row items-start space-x-4">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <span className="badge badge-primary">{strCategory}</span>
            <h1 className="text-5xl font-bold">{strMeal}</h1>
            <p><small>{strTags}</small></p>
            <p className="py-6">
              {strInstructions}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealDetails;
