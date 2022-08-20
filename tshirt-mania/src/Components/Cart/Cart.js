import React from 'react';
import AddedCart from './AddedCart';

const Cart = ({ cart }) => {
  return (
    <div className='pr-4'>
      <h2>Selected Item {cart.length}!</h2>
      {
        cart.map(product => <AddedCart key={product._id} product={product} />)
      }
    </div>
  );
};

export default Cart;