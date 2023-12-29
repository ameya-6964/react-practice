import React from "react";

const Item = ({ item, onDeleteItem, onToggleItems }) => {
  const { quantity, description, packed } = item;
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
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
