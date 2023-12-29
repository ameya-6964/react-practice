import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriends from "./Components/FormAddFriends";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriendsList";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriends />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
