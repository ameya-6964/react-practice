const PizzaData = ({ pizza }) => {
  const { name: pizzaName, photoName, ingredients, price, soldOut } = pizza;
  console.log(soldOut);
  return (
    <li className="pizza">
      <img src={`../../${photoName}`} alt={pizzaName} />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingredients}</p>
        <span>
          <b> {price}</b> ₹
        </span>
      </div>
    </li>
  );
};

export default PizzaData;
