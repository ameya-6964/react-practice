import React, { useState } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  //! This is Function For Count1 variable To Increase Value By 1
  function increment() {
    setCount(count + 1);
  }
  //! This is Function For Count1 variable To Decrease Value By 1
  function decrement() {
    setCount(count - 1);
  }
  //! This is Function For Count2 variable To Increase Value By 5
  //! If You Have Initialised value rather then 0 use this way
  function increment2() {
    setCount2((prevCount) => prevCount + 5);
  }
  //! This is Function For Count2 variable To Decrease Value By 5
  //! If You Have Initialised value rather then 0 use this way
  function decrement2() {
    setCount2((prevCount) => prevCount - 5);
  }
  return (
    <div className="user-container">
      <h1> Name: {name}</h1>
      <h2> Location: {location}</h2>
      <h3> Contact: {contact}</h3>
      <h3> Count1 : {count}</h3>
      <h3> Count2 : {count2}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={increment2}>+</button>
      <button onClick={decrement2}>-</button>
    </div>
  );
};

export default User;
