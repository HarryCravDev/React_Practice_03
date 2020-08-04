import React from "react";
import "./App.css";
import axios from "axios";
import CardContainer from "./Components/Card_Container/CardContainer";
import InputTotal from "./Components/Inputs/InputTotal";
import PokemonGame from "./Components/Pokemon_Game/PokemonGame";

class App extends React.Component {
  state = {
    pokemon: [],
    picture: "",
    number: 0,
    name: "",
    limit: 6,
  };

  // Get Random Pokemon in Array, limited by value in 'limit in state.
  randomPokemon = () => {
    // Create arrays
    let pokeArray = [];
    let randomNumber = [];
    // Push 10 numbers to array
    for (let i = 0; i < this.state.limit; i++) {
      randomNumber.push(Math.floor(Math.random() * 100) + 1);
    }

    // API - Push Pokemon objects to Pokemon Array
    randomNumber.map((number) =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${number}`, {
          params: {},
        })
        .then((data) => pokeArray.push(data))
        .then(() => this.setState({ pokemon: pokeArray }))
    );
  };

  // Get Pokemon URL Array
  getPokemon = async (input) => {
    if (typeof input === "number") {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${input}`,
        {
          params: {},
        }
      );

      await this.loadingPokemon(response.data.results);
    } else {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}`,
        {
          params: {},
        }
      );

      this.setState({ pokemon: [response] });
    }
  };

  // Get Pokemon and Update State
  loadingPokemon = async (data) => {
    if (Array.isArray(data)) {
      let pokemon = await Promise.all(
        data.map(async (item) => {
          const res = await axios.get(item.url);
          return res;
        })
      );

      this.setState({ pokemon: pokemon });
    }
  };

  // Submit total number of Pokemon
  submitNumber = (number) => {
    const num = parseInt(number);
    this.setState({ number: num });
    this.getPokemon(num);
  };

  // Submit name of Pokemon
  submitName = (name) => {
    this.setState({ name: name });
    this.getPokemon(name);
  };

  render() {
    return (
      <div className="game-container">
        <InputTotal
          submitNumber={this.submitNumber}
          submitName={this.submitName}
        />
        {this.state.pokemon.length > 0 ? (
          <CardContainer cards={this.state.pokemon} />
        ) : null}
        {/* Test Code */}
        <button onClick={() => this.randomPokemon()}>
          Random Pokemon Test Button
        </button>
        <PokemonGame pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
