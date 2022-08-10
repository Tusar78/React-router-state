import React from "react";

const Link = ({ route }) => {
  const { name, link } = route;
  return (
    <li className="nav__item">
      <a href={link} className="nav__link text-teal-50">
        {name}
      </a>
    </li>
  );
};

export default Link;
