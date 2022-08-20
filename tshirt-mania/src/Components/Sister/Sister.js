import React from 'react';

const Sister = ({house}) => {
  return (
    <div className='border border-gray-400 p-4'>
      <h5>Sister</h5>
      {house}
    </div>
  );
};

export default Sister;