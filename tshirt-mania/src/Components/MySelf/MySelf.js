import React from 'react';

const MySelf = ({house}) => {
  return (
    <div className='border border-pink-400 p-4'>
      <h5>My Self</h5>
      {house}
      <p className='text-white bg-purple-600 font-semibold px-2'></p>
    </div>
  );
};

export default MySelf;