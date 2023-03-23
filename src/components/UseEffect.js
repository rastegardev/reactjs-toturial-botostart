import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    console.log(number);
  }, [number]);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>
        Plus 1
      </button>
      <h1>{second}</h1>
      <button onClick={() => setSecond((prevSecond) => prevSecond + 1)}>
        Plus 1
      </button>
    </div>
  );
};

export default UseEffect;
