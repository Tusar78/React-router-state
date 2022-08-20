import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const MySelf = ({house}) => {
  const myGift = useContext(RingContext)
  return (
    <div className='border border-pink-400 p-4'>
      <h5>My Self</h5>
      {house}
      <p className='text-white bg-purple-600 font-semibold px-2'>{myGift}</p>
    </div>
  );
};

export default MySelf;