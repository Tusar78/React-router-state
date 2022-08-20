import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const MySelf = () => {
  const [myHouse, setMyHouse] = useContext(RingContext)
  return (
    <div className='border border-pink-400 p-4'>
      <h5>My Self</h5>
      <p>There are {myHouse} house</p>
      <p className='text-white bg-purple-600 font-semibold px-2'>My Gift: {myHouse}</p>
      <button className='btn btn-secondary' onClick={() => setMyHouse(myHouse + 1)}>Gift</button>
    </div>
  );
};

export default MySelf;