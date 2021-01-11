import React from "react";

function Pets(props) {

  return (
    <div className="Pets">
      <p>His pet's name is {props.name} and he/she is a {props.breed}.</p>
    </div>
  );
}

export default Pets;
