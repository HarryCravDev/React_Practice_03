import React from "react";
import Card from "../Pokemon_Card/Card";

const PlayerHand = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default PlayerHand;
