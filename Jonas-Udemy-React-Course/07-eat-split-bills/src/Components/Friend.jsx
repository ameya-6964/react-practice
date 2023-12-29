import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)} ₹
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owes You {Math.abs(friend.balance)} ₹
        </p>
      )}
      {friend.balance === 0 && <p>You And {friend.name} Are Even </p>}
      <Button
        onClick={() => {
          onSelection(friend);
        }}
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
