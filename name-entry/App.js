import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      // add a property to hold the array of names
      // names: ["paula", "bob", "mike"]
      names: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitted = this.submitted.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  submitted(e) {
    e.preventDefault();
    // when the user subsmits their name,
    // take the name that is saved in the state object
    // and add it tothe names array
    // you should never directly change state

    // use prevState to bring over the previous names
    // that were saved into in the array
    this.setState((prevState) => {
      // with prevState,
      // you have access to all the properties in your state object
      return {
        names: [prevState.name, ...prevState.names],
        name: ""
      }
    });

    console.log(this.state)
  }

  /*

  
  const details = {
    color: "blue", 
    hair: "black"
  }


  const person = { 
    name: "paula", 
    age: 20, 
    ...details
  }
  // use the spread operator to add all the properties in details to 'person'

  result: 
  person = { 
    name: "paula",
    age: 20,
    color: "blue", 
    hair: "black"
  }

  const dogs = ["beagle", "chow"]
  const cats = ["siamese", "whitecat"] 
  
  const animals = [...dogs, ...cats]
  // animals = ["beagle", "chow", "siamese", "whhitecat"]
  animals = [...animals, "snake"]
  */

  render() {
    const allNames = this.state.names.map((name) => <li>{name}</li>);
    return (
      <div className="App">
        <main>
          <form>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Name Here"
            />
            <button
              name="submit"
              className="submitButton"
              onClick={this.submitted}
            >
              Submit
            </button>
          </form>
        </main>

        <br />
        <br />

        <h1>Name: {this.state.name}</h1>
        <ul>{allNames}</ul>
      </div>
    );
  }
}

export default App;
