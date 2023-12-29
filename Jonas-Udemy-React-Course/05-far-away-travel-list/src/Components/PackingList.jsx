import React from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
