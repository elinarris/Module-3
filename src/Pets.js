import React from "react";

function Pets(props) {

  return (
    <div>
      <h1>Pet Name: {props.name}</h1>
      <h2>Breed: {props.breed}</h2>
    </div>
  );
}

export default Pets;
