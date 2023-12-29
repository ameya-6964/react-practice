import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em> Start Adding Some Items To Your Packing List</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Got Everything! Ready To Go ✈️"
          : `You Have ${numItems} On Your List , and You Have Packed 
        ${numPacked} Items (${percentage} %)`}
      </em>
    </footer>
  );
};

export default Stats;
