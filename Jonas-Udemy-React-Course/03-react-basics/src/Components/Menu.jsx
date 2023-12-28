import { pizzaData } from "../../public/data";
import Pizza from "./Pizza";

const Menu = () => {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numOfPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numOfPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Menu;
