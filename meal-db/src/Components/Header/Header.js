import React from "react";

const Header = () => {
  return (
    <header>
      <div className="w-full shadow">
        <nav className="navbar bg-base-100 max-w-screen-lg mx-auto">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              Meal DB
            </a>
          </div>
          <div className="flex-none">
            <div class="form-control">
              <input
                type="text"
                placeholder="Search"
                class="input input-bordered"
              />
            </div>
            <ul className="menu menu-horizontal p-0">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Meals</a>
              </li>
              <li>
                <a href="/">About</a>
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
