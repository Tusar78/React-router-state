import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const cardData = [
    {
      id: 1,
      name: "Laptop",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 2,
      name: "Mobile",
      text: "Supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 3,
      name: "Desktop",
      text: "This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content.",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {cardData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default CardGroup;
