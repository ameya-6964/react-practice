const PizzaData = ({ pizza }) => {
  const { name: pizzaName, photoName, ingredients, price, soldOut } = pizza;
  console.log(soldOut);
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={`../../${photoName}`} alt={pizzaName} />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingredients}</p>
        {soldOut ? <span>SOLD OUT</span> : <span>{price}</span>}
      </div>
    </li>
  );
};

export default PizzaData;
