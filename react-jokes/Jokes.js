import React from "react";

function Jokes(props) {
  return (
    <div className="joke">
      <h1>Joke #{props.jokeNum}</h1>
      <p>{props.joke}</p>
      <p style={{display: !props.punchline && "none"}}>
        <b>Punchline:</b> {props.punchline}
      </p>
    </div>
  );
}

export default Jokes;
