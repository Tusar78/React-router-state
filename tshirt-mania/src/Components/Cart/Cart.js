import React from 'react';
import AddedCart from './AddedCart';

const Cart = ({ cart, handleRemoveItem }) => {
  let condition;
  if (cart.length === 0) {
    condition = 'Please select at least one item!'
  } else if (cart.length === 1) {
    condition = 'Please select one more items'
  } else {
    condition = 'Thank you for select item'
  }
  return (
    <div className='pr-4'>
      <h2 className='uppercase font-semibold text-primary'>Selected Item {cart.length}!</h2>
      <p>
        {condition}
      </p>
      {
        cart.map(product => <AddedCart key={product._id} product={product} handleRemoveItem={handleRemoveItem} />)
      }
      {
        cart.length !== 4 ? 'Keep Adding!' : <button className='btn btn-error'>Remove All</button>
      }
    </div>
  );
};

export default Cart;