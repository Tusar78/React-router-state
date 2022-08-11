import React from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

const ActiveLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link
        className={match ? "btn btn-primary text-white normal-case focus:btn-primary" : ""}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default ActiveLink;
