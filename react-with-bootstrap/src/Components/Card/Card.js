import React from "react";

const Card = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
