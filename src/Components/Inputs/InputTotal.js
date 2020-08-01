import React from "react";

class InputTotal extends React.Component {
  state = {
    total: 0,
    name: "",
  };

  onInputChange = (number) => {
    this.setState({ total: number.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.submitNumber(this.state.total);
  };

  onInputNameChange = (name) => {
    this.setState({ name: name });
  };

  onFormNameSubmit = (e) => {
    e.preventDefault();
    this.props.submitName(this.state.name);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="number"
            value={this.state.total}
            onChange={this.onInputChange}
            placeholder="Total Number of Pokemon"
          />
          <button>Submit!</button>
        </form>
        <form onSubmit={this.onFormNameSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onInputNameChange}
            placeholder="Name"
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default InputTotal;
