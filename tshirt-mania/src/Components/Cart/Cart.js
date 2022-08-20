import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Selected Item {cart.length}!</h2>
      {
        cart.map(product => <p>{product.name}</p>)
      }
    </div>
  );
};

export default Cart;