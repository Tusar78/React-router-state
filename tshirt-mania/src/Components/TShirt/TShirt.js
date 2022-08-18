import React from 'react';

const TShirt = ({ tshirt }) => {
  const {picture, name, price} = tshirt;
  return (
    <div className=' min-w-min border rounded-md shadow-md p-4'>
      <img src={picture} alt={name} className="image-32 h-32 object-contain" />
      <h2 className='text-xl font-semibold text-amber-400'>{name}</h2>
      <p className='text-base'>Price: ${price}</p>
      <button className='btn btn-primary'>Add To Cart</button>
    </div>
  );
};

export default TShirt;