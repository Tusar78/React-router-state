import React from 'react';

const Brother = ({house}) => {
  return (
    <div className='border border-purple-400 p-4'>
      <h5>Brother</h5>
      {house}
    </div>
  );
};

export default Brother;