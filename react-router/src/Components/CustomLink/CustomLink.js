import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  console.log(props);
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log(match);

  return (
    <>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </>
  );
};

export default CustomLink;