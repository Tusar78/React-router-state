import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
  const routes = [
    {id: 1, name: 'Home', link: '/Home'},
    {id: 2, name: 'About', link: '/About'},
    {id: 3, name: 'Contact', link: '/Contact'},
    {id: 4, name: 'Portfolio', link: '/Portfolio'}
  ]
  return (
    <div className='navbar w-full p-4 bg-gray-900'>
      <nav className="nav max-w-screen-lg mx-auto">

        <div className="nav__menu flex justify-end">
          <ul className="nav__list flex space-x-4">
            {
              routes.map(route => <Link key={route.id} route={route} />)
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;