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
      console.log(response);
      this.setState({ pokemon: [response] });
      // await this.loadingPokemon(response.data.results);
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
      </div>
    );
  }
}

export default App;
