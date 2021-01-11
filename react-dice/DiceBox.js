import React from "react";

function DiceBox(props) {
  return (
    <div className="dices">
      <div className="die1" style={{ backgroundColor: props.color }}>
        {props.num1}
      </div>
      <div className="die1" style={{ backgroundColor: props.color }}>
        {props.num2}
      </div>
      <div className="die1" style={{ backgroundColor: props.color }}>
        {props.num3}
      </div>
      <div className="die1" style={{ backgroundColor: props.color }}>
        {props.num4}
      </div>
      <div className="die1" style={{ backgroundColor: props.color }}>
        {props.num5}
      </div>
      <div className="die1" style={{ backgroundColor: props.color }}>
        {props.num6}
      </div>
    </div>
  );
}

export default DiceBox;
