import React from "react";

const Friend = ({ friend }) => {
  return (
    <li>
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
      <button className="button">Select</button>
    </li>
  );
};

export default Friend;
