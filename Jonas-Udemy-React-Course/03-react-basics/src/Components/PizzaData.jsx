const PizzaData = ({ pizza }) => {
  const { name: pizzaName, photoName } = pizza;
  return (
    <div>
      <h1>{pizzaName}</h1>
      <img src={`../../${photoName}`} alt="Pizzas" />
    </div>
  );
};

export default PizzaData;

{
  /* <img
key={pizza.name}
height={200}
width={300}
src={`../../${pizza.photoName}`}
/> */
}
