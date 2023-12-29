import { useState } from "react";
import { initialFriends } from "./Components/FriendsList";
import Button from "./Components/Button";
import FormAddFriends from "./Components/FormAddFriends";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriendsList";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend((showAddFriend) => !showAddFriend);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriends onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
