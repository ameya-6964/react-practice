const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}&nbsp;
      {isOpen ? "We Are Currently Open" : "Sorry We Are Currently Closed"}
    </footer>
  );
};

export default Footer;
