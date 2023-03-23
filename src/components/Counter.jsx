import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const plusOne = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plusOne}>+1</button>
    </div>
  );
};

export default Counter;
