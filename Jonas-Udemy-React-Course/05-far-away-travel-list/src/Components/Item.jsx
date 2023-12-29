import React from "react";

const Item = ({ item, onDeleteItem }) => {
  const { quantity, description, packed } = item;
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
};

export default Item;
