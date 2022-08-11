import React from "react";

const Header = () => {
  return (
    <header>
      <div className="w-full glass">
        <nav className="navbar bg-base-100 max-w-screen-lg mx-auto">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl uppercase">
              Naraz
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
