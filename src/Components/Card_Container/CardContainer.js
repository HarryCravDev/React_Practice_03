import React from "react";
import "./CardContainer.styles.css";
import Card from "../Pokemon_Card/Card";

const CardContainer = ({ cards }) => {
  const cardList = cards.map((card) => <Card key={card.data.id} card={card} />);
  return <div className="card-container">{cardList}</div>;
};

export default CardContainer;
