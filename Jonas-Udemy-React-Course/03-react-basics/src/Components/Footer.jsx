const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We&apos;re Currently Open Till {closeHour}:00 PM.&nbsp;
            <b style={{ color: "green" }}>Come Visit Us Or Order Online </b>
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
