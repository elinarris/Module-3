import React from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night"
  }

  return (
    <div>
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App