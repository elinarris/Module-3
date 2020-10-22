import React from "react";
import vacationList from "./vacationList";
import Vacation from "./Vacation";

function App() {
  const vacationComponents = vacationList.map((spot) => (
    <Vacation place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />
  ));
  return <div className="vacationCard">{vacationComponents}</div>;
}

export default App;
