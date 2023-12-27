import { pizzaData } from "../../public/data";
import PizzaData from "./PizzaData";

const Pizza = () => {
  return (
    <div>
      {pizzaData.map((pizza) => (
        <PizzaData pizza={pizza} key={pizza.name} />
      ))}
      {/*  <img src="../../public/pizzas/focaccia.jpg" width={100} alt="" /> */}
    </div>
  );
};

export default Pizza;
