import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
  return (
    <div className='border border-blue-400 p-4'>
      <h4>Father</h4>
      {house}

      <div className='m-2 p-2 grid gap-2'>
        <MySelf house={house} />
        <Brother house={house} />
        <Sister house={house} />
      </div>
    </div>
  );
};

export default Father;