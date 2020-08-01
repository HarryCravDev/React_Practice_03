import React from "react";
import "./Card.styles.css";

const Card = ({ card }) => {
  console.log(card);
  return (
    <div className="card">
      <h1 className="card-title">{card.data.species.name}</h1>
      <img
        src={card.data.sprites.front_default}
        alt={`Pokemon: ${card.data.species.name}`}
      />
      <p className="card-data">{`Type: ${card.data.types[0].type.name}`}</p>
      <p className="card-data">{`Experience Points: ${card.data.base_experience}`}</p>
    </div>
  );
};

export default Card;
