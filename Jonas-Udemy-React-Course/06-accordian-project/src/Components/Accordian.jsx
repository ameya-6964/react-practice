import { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = ({ data }) => {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordianItem
          currOpen={currOpen}
          onOpen={setCurrOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordianItem>
      ))}
    </div>
  );
};

export default Accordian;
