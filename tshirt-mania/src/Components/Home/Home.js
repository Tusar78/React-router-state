import React from 'react';
import Cart from '../Cart/Cart';
import useTShirt from '../Hooks/useTShirt';
import TShirt from '../TShirt/TShirt';

const Home = () => {
  const [tShirts, setTShirts] = useTShirt();
  return (
    <div className='flex space-x-4 mt-4'>
      <div className='basis-2/3 pl-4 grid grid-cols-3 gap-8'>
        {
          tShirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} />)
        }
      </div>
      <div className='basis-1/3'>
        <Cart />
      </div>
    </div>
  );
};

export default Home;