import React from "react";
import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
  const { title, description, image, id } = product;
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    const path = `/product/${id}`
    navigate(path)
  }
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-52 object-contain"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description.substring(0, 100)}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleNavigate}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
