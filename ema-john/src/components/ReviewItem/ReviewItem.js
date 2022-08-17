import React from 'react';

const ReviewItem = ({ product }) => {
  const { name, price, shipping, quantity, img } = product;
  return (
    <div>
      <img style={{width: '80px'}} src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p>Shipping: {shipping}</p>
      <p>Qyt: {quantity}</p>
    </div>
  );
};

export default ReviewItem;