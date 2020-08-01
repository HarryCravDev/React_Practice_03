import React from "react";
import "./App.css";
import axios from "axios";
import CardContainer from "./Components/Card_Container/CardContainer";
import InputTotal from "./Components/Inputs/InputTotal";

class App extends React.Component {
  state = {
    pokemon: [],
    picture: "",
    number: 0,
    name: "",
  };

  // Get Pokemon URL Array
  getPokemon = async (num) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${num}`,
      {
        params: {},
      }
    );

    await this.loadingPokemon(response.data.results);
  };

  // Get Pokemon and Update State
  loadingPokemon = async (data) => {
    let pokemon = await Promise.all(
      data.map(async (item) => {
        const res = await axios.get(item.url);
        return res;
      })
    );

    this.setState({ pokemon: pokemon });
  };

  // Submit total number of Pokemon
  submitNumber = (number) => {
    const num = parseInt(number);
    console.log(typeof num);
    this.setState({ number: num });
    this.getPokemon(num);
  };

  // Submit name of Pokemon
  submitName = (name) => {
    console.log(name);
    this.setState({ name: name });
    this.getPokemon(name);
  };

  render() {
    return (
      <div className="game-container">
        {this.state.pokemon.length > 0 ? (
          <CardContainer cards={this.state.pokemon} />
        ) : null}
        <InputTotal
          submitNumber={this.submitNumber}
          submitName={this.submitName}
        />
      </div>
    );
  }
}

export default App;
