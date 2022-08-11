import React from "react";

const Product = ({ product }) => {
  const { title, description, image } = product;
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
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
