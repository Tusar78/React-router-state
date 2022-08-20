import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
  const [myHouse, setMyHouse] = useState(0);
  const handleHouse = () => {
    const newHouse = myHouse + 1;
    setMyHouse(newHouse)
  }
  const house = <p>There are {myHouse} house</p>;
  return (
    <div className='max-w-screen-lg mx-auto mt-6 border border-amber-400 p-4'>
      <h2>Grandpa</h2>
      <button className='btn btn-accent' onClick={handleHouse}>Increased House</button>
      {house}
      <div className='m-2 p-2 grid grid-cols-3 gap-4'>
        <Father house={house} />
        <Uncle house={house} />
        <Aunty house={house} />
      </div>
    </div>
  );
};

export default Grandpa;