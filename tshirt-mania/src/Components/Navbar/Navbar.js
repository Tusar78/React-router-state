import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          T-shirt Mania
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/order-review">Order Review</Link>
          </li>
          <li>
            <Link to="/grandpa">Grandpa</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
