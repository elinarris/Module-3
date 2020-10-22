import React from "react";
import FriendList from "./FriendList";
import Pets from "./Pets"

function Friend(props) {
  const listPets = props.pets.map((pet) => (
    <Pets name={pet.name} breed={pet.breed} />
  ));
  return (
    <div className="Friends">
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <p>Pets: {listPets}</p>
    </div>
  );
}

export default Friend;
