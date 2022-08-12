import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = ({ handleSearch }) => {
  return (
    <header>
      <div className="w-full shadow">
        <nav className="navbar bg-base-100 max-w-screen-lg mx-auto">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Meal DB
            </Link>
          </div>
          <div className="flex-none">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <ul className="menu menu-horizontal p-0">
              <li>
                <ActiveLink to="/home">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/meals">Meals</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/about">About</ActiveLink>
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
