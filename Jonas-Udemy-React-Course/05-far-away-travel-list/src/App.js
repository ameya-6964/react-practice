import React, { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
};

export default App;
