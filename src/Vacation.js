import React from "react";

function Vacation(props) {


  return (
    <div style={{color: props.timeToGo && "#000000"}}>
      <h1 style={{color: "#574D50"}}>For the price of ${props.price}</h1>
      <h2>You can go to {props.place}!</h2>
      <p style={{color: "#633144"}}>
        The best time to go to {props.place} is during the {props.timeToGo}.
      </p>
      <br></br>
    </div>
  );
}

export default Vacation;
