import React from "react";

const Item = ({ item }) => {
  const { quantity, description, packed } = item;
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
