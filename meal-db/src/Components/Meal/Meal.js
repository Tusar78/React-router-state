import React from "react";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal, strCategory, strInstructions, idMeal } = meal;
  const navigate = useNavigate();
  const handleNavigate = () => {
    const path = `/meal/${idMeal}`;
    navigate(path);
  }
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} alt={strMeal} className="w-full" />
      </figure>
      <div className="card-body">
        <div className="badge badge-secondary">{strCategory}</div>
        <h2 className="card-title">{strMeal}</h2>
        <p>{strInstructions.substr(0, 50)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleNavigate}>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
