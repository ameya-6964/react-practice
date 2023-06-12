import React from "react";
import { pizzaData } from "../data/data";
import Pizza from "./Pizza";

import "../index.css";

const Menu = () => {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      {pizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
      {/*  <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, Mozarella, Spinach"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mozarella, Mushrooms"
        photoName="pizzas/funghi.jpg"
        price={13 } */}
    </main>
  );
};

export default Menu;
