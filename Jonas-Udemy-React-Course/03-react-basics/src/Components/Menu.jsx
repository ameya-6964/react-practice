import { pizzaData } from "../../public/data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </main>
  );
};

export default Menu;
