const PizzaData = ({ pizza }) => {
  const { name: pizzaName, photoName, ingredients, price } = pizza;
  return (
    <li className="pizza">
      <img src={`../../${photoName}`} alt={pizzaName} />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingredients}</p>
        <span>{price + 200} INR</span>
      </div>
    </li>
  );
};

export default PizzaData;
