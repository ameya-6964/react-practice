import AccordianItem from "./AccordianItem";

const Accordian = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordianItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
};

export default Accordian;
