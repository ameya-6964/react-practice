import { pizzaData } from "../../public/data";
import Pizza from "./Pizza";

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numOfPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numOfPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <h1>Something When Wrong Please Try Again After Some Time</h1>
      )}
    </main>
  );
};

export default Menu;
