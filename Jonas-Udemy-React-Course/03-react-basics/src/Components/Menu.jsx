import { pizzaData } from "../../public/data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
