import Button from "./Components/Button";
import FormAddFriends from "./Components/FormAddFriends";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriends />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
