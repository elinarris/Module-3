import React from "react";
import FriendList from "./FriendList";
import Friend from "./Friend";
import Pets from "./Pets";

function App() {
  const listFriends = FriendList.map((friend) => (
    <Friend name={friend.name} age={friend.age} pets={friend.pets}/>
  ));

  return <div className="whole-screen">
    {listFriends}
    </div>;
}

export default App;
