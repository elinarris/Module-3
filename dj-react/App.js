import React from "react";
import Square from "./Square";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ["white", "white", "white", "white"],
    };
    this.smallTime = this.smallTime.bind(this);
    this.partyTime = this.partyTime.bind(this);
    this.professional1 = this.professional1.bind(this);
    this.professional2 = this.professional2.bind(this);
    this.bigTime1 = this.bigTime1.bind(this);
    this.bigTime2 = this.bigTime2.bind(this);
    this.bigTime3 = this.bigTime3.bind(this);
    this.bigTime4 = this.bigTime4.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    alert("bing!");
  }

  smallTime() {
    this.setState((prevState) => {
      if (prevState.colors[0] === "white")
        return {
          colors: ["black", "black", "black", "black"],
        };
      else
        return {
          colors: ["white", "white", "white", "white"],
        };
    });
  }

  partyTime() {
    this.setState((prevState) => {
      return {
        colors: ["purple", "purple", "white", "white"],
      };
    });
  }

  professional1() {
    this.setState((prevState) => {
      if (prevState.colors[2] === "white")
        return {
          colors: ["white", "white", "blue", "white"],
        };
    });
  }

  professional2() {
    this.setState((prevState) => {
      if (prevState.colors[3] === "white")
        return {
          colors: ["white", "white", "white", "blue"],
        };
    });
  }

  bigTime1() {
    this.setState((prevState) => {
      if (prevState.colors[0] === "white")
        return {
          colors: ["blue", "white", "white", "white"],
        };
      else {
        return {
          colors: ["pink", "white", "white", "white"],
        };
      }
    });
  }

  bigTime2() {
    this.setState((prevState) => {
      if (prevState.colors[1] === "white")
        return {
          colors: ["white", "yellow", "white", "white"],
        };
      else {
        return {
          colors: ["white", "brown", "white", "white"],
        };
      }
    });
  }

  bigTime3() {
    this.setState((prevState) => {
      if (prevState.colors[2] === "white")
        return {
          colors: ["white", "white", "red", "white"],
        };
      else {
        return {
          colors: ["white", "white", "orange", "white"],
        };
      }
    });
  }

  bigTime4() {
    this.setState((prevState) => {
      if (prevState.colors[3] === "white")
        return {
          colors: ["white", "white", "white", "teal"],
        };
      else {
        return {
          colors: ["white", "white", "white", "green"],
        };
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="sq1">
          <Square color={this.state.colors[0]} />
        </div>
        <div className="sq2">
          <Square color={this.state.colors[1]} />
        </div>
        <div className="sq3">
          <Square color={this.state.colors[2]} />
        </div>
        <div className="sq4">
          <Square color={this.state.colors[3]} />
        </div>
        <div className="buttons">
          <button onClick={this.smallTime}>Small Time</button>
          <button onClick={this.partyTime}>Party</button>
          <button onClick={this.professional1}>Pro 1</button>
          <button onClick={this.professional2}>Pro 2</button>
          <button onClick={this.bigTime1}>BIGTIME 1</button>
          <button onClick={this.bigTime2}>BIGTIME 2</button>
          <button onClick={this.bigTime3}>BIGTIME 3</button>
          <button onClick={this.bigTime4}>BIGTIME 4</button>
          <button onClick={this.playSound}>Music</button>
        </div>
      </div>
    );
  }
}

export default App;
