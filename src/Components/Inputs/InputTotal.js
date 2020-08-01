import React from "react";
import "./InputTotal.styles.css";

class InputTotal extends React.Component {
  state = {
    total: 0,
    name: "",
  };

  // Update state with number input
  onInputChange = (number) => {
    this.setState({ total: number.target.value });
  };

  // Submit number input
  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.number === 0) {
      return false;
    }
    this.props.submitNumber(this.state.total);
  };

  // Update state with name input
  onInputNameChange = (name) => {
    this.setState({ name: name.target.value });
  };

  // Submit name input
  onFormNameSubmit = (e) => {
    e.preventDefault();
    if (this.state.name !== "") {
      this.props.submitName(this.state.name.toLowerCase());
    }
    return false;
  };

  render() {
    return (
      <div className="input-parent">
        {/* Number Input */}
        <div className="ui card input-container">
          <form
            className="ui mini input input-form"
            onSubmit={this.onFormSubmit}>
            <h3 className="ui header">
              <div className="content">
                Search by name for a Pokemon!
                <div className="sub header">
                  Enter a name of Pokemon you want to see.
                </div>
              </div>
            </h3>
            <input
              type="text"
              value={this.state.total}
              onChange={this.onInputChange}
              placeholder="Total Number of Pokemon"
            />
            <button className="ui button input-button">Submit!</button>
          </form>
        </div>
        {/* Name Input */}
        <div className="ui card input-container">
          <form
            onSubmit={this.onFormNameSubmit}
            className="ui mini input input-form">
            <h3 className="ui header">
              <div className="content">
                Search for a number of Pokemon!
                <div className="sub header">
                  Enter the number of Pokemon you want to see.
                </div>
              </div>
            </h3>
            <input
              type="text"
              value={this.state.name}
              onChange={this.onInputNameChange}
              placeholder="Name"
            />
            <button className="ui button input-button">Submit!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputTotal;
