import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <CustomLink to="/" className="nav__link">
                  Home
                </CustomLink>
              </li>
              <li className="nav__item">
                <CustomLink to="/friends" className="nav__link">
                  Friends
                </CustomLink>
              </li>
              <li className="nav__item">
                <CustomLink to="/posts" className="nav__link">
                  Post
                </CustomLink>
              </li>
              <li className="nav__item">
                <CustomLink to="/about" className="nav__link">
                About
                </CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
