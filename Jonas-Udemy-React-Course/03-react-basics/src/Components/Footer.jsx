const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We&apos;re Currently Open Till {closeHour}:00 PM.&nbsp;
            <b style={{ color: "green" }}>Come Visit Us Or Order Online </b>
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>
            We&apos;re Currently Close,&nbsp;
            <b style={{ color: "red" }}>
              We Are Operational From {openHour}:00 To {closeHour}:00
            </b>
          </p>
          <button className="btn-disabled">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
