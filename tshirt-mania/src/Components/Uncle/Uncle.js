import React from 'react';

const Uncle = ({house}) => {
  return (
    <div className='border border-red-400 p-4'>
      <h4>Uncle</h4>
      {house}
    </div>
  );
};

export default Uncle;