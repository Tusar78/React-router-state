import React from 'react';

const AddedCart = ({ product }) => {
   const {name} = product;
  return (
    <div className='flex items-center justify-between p-3 border rounded mb-3'>
      <p>{name}</p>
      <p className='p-2 bg-red-200 text-red-600 rounded-md cursor-pointer font-semibold'>X</p>
    </div>
  );
};

export default AddedCart;