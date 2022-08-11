import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <header>
      <div className="w-full glass">
        <nav className="navbar bg-base-100 max-w-screen-lg mx-auto">
          <div className="flex-1">
            <ActiveLink to="/" className="btn btn-ghost text-xl uppercase">
              Naraz
            </ActiveLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/about">About</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/products">Products</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/contact">Contact</ActiveLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
