import React from "react";
import PlayerHand from "./PlayerHand";

const PokemonGame = ({ pokemon }) => {
  if (pokemon.length !== 0) {
    // Player Hands
    const hand1 = [...pokemon];
    let hand2 = [];

    // Split Pokemon between Hand1 & Hand2
    for (let i = 0; i < 3; i++) {
      let pokemon = hand1.splice(i, 1)[0];
      hand2.push(pokemon);
    }

    // Calculate Experience
    let p1;
    let p2;
    console.log(hand2.length);
    if (hand1.length === 3 && hand2.length === 3) {
      p1 = hand1.reduce(
        (exp, pokemon) => exp + pokemon.data.base_experience,
        0
      );

      p2 = hand2.reduce(
        (exp, pokemon) => exp + pokemon.data.base_experience,
        0
      );

      console.log(p1);
      console.log(p2);
    }
  }
  console.log("Working!");

  return (
    <div>
      <h1>Hello there</h1>
    </div>
  );
};

export default PokemonGame;
