import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { name, price, shipping, quantity, img } = product;
  return (
    <div className="border p-4 flex rounded-md items-center w-full justify-between">
      <div className="flex space-x-4">
        <img style={{ width: "80px" }} src={img} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>Price: {price}</p>
          <p>Shipping: {shipping}</p>
          <p>Qyt: {quantity}</p>
        </div>
      </div>
      <div>
        <button className="w-12 h-12 rounded-full shadow-md bg-white flex items-center justify-center" onClick={() => handleRemoveProduct(product)}>
          <FontAwesomeIcon className="text-red-400" icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
