import React from "react";
import FriendList from "./FriendList";
import Friend from "./Friend";
import Pets from "./Pets";

function App() {
  const listFriends = FriendList.map((friend) => (
    <Friend name={friend.name} age={friend.age} pets={friend.pets}/>
  ));

  // const listPets = FriendList.map((pet) => (
  //   <Pets name={pet.pets.name} breed={pet.pets.breed} />
  // ));

  return <div>{listFriends}</div>;
}

export default App;
