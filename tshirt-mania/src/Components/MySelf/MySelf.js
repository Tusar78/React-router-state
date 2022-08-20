import React from 'react';

const MySelf = ({house}) => {
  return (
    <div className='border border-pink-400 p-4'>
      <h5>My Self</h5>
      {house}
    </div>
  );
};

export default MySelf;