import React from "react";
import "./PokemonGame.styles.css";
import PlayerHand from "./PlayerHand";

const PokemonGame = ({ pokemon }) => {
  // Player Hands
  let hand1 = [...pokemon];
  let hand2 = [];
  let p1Exp;
  let p2Exp;

  if (pokemon.length !== 0) {
    // Split Pokemon between Hand1 & Hand2
    for (let i = 0; i < 3; i++) {
      let pokemon = hand1.splice(i, 1)[0];
      hand2.push(pokemon);
    }

    // Calculate Experience
    console.log(hand2.length);
    if (hand1.length === 3 && hand2.length === 3) {
      p1Exp = hand1.reduce(
        (exp, pokemon) => exp + pokemon.data.base_experience,
        0
      );

      p2Exp = hand2.reduce(
        (exp, pokemon) => exp + pokemon.data.base_experience,
        0
      );
    }
  }

  return (
    <div className="pokemon-game-container">
      {hand1.length === 3 && hand2.length === 3 ? (
        <React.Fragment>
          <PlayerHand pokemon={hand1} exp={p1Exp} />
          <div>
            Player 1 Experience: {p1Exp} <br />
            Player 2 Experience: {p2Exp}
          </div>
          <PlayerHand pokemon={hand2} exp={p2Exp} />
        </React.Fragment>
      ) : (
        <div></div>
      )}
    </div>
  );
};

// class PokemonGame extends React.Component {
//   splitHand = (arr) => {};

//   render() {
//     let hand1 = [...this.props.pokemon];
//     let hand2 = [];
//     let p1;
//     let p2;

//     if (this.props.pokemon.length !== 0) {
//       // Player Hands

//       // Split Pokemon between Hand1 & Hand2
//       for (let i = 0; i < 3; i++) {
//         let pokemon = hand1.splice(i, 1)[0];
//         hand2.push(pokemon);
//       }

//       // Calculate Experience

//       console.log(hand2.length);
//       if (hand1.length === 3 && hand2.length === 3) {
//         p1 = hand1.reduce(
//           (exp, pokemon) => exp + pokemon.data.base_experience,
//           0
//         );

//         p2 = hand2.reduce(
//           (exp, pokemon) => exp + pokemon.data.base_experience,
//           0
//         );
//         console.log(p1);
//         console.log(p2);
//       }
//     }
//     console.log("Working!");

//     return (
//       <div>
//         <PlayerHand p1={hand1} />
//       </div>
//     );
//   }
// }

export default PokemonGame;
