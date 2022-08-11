import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className="navbar">
        <div className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                {/* <a href="/" className='nav__link'>Home</a> */}
                <Link to='/' className="nav__link">Home</Link>
              </li>
              <li className="nav__item">
              <Link to='/friends' className="nav__link">Friends</Link>
              </li>
              <li className="nav__item">
                <Link to='/about' className="nav__link">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;