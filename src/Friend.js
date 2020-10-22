import React from "react";

function Friend(props) {
  return (
    <div className="Friends">
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <p>Pets: {props.pets.name}</p>
    </div>
  );
}

export default Friend;
