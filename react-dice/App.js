import React from "react";
import "./App.css";
import DiceBox from "./DiceBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0,
      color: "white",
    };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    this.setState((prevState) => {
      return {
        num1: 1 + Math.floor(Math.random() * 6),
        num2: 1 + Math.floor(Math.random() * 6),
        num3: 1 + Math.floor(Math.random() * 6),
        num4: 1 + Math.floor(Math.random() * 6),
        num5: 1 + Math.floor(Math.random() * 6),
        num6: 1 + Math.floor(Math.random() * 6),
      };
    });
  }

  // Math.floor(Math.random() * 6)

  render() {
    return (
      <div className="App">
        <h1>This is my dice...</h1>
        <DiceBox num1={this.state.num1} />
        <DiceBox num2={this.state.num2} />
        <DiceBox num3={this.state.num3} />
        <DiceBox num4={this.state.num4} />
        <DiceBox num5={this.state.num5} />
        <DiceBox num6={this.state.num6} />
        <button onClick={this.rollDice}>Roll!</button>
      </div>
    );
  }
}

export default App;
