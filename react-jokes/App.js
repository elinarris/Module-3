import React from "react";
import Jokes from "./Jokes";
import jokeArray from "./jokeArray";

function App() {
  const jokeComponents = jokeArray.map((joke) => (
    <Jokes key={joke.jokeNum} joke={joke.joke} punchline={joke.punchline} />
  ));
  return <div className="jokes-list">{jokeComponents}</div>;
}

export default App;
