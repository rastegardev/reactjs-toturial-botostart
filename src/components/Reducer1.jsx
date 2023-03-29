import React, { useReducer } from "react";

// useReducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "up":
      return state + 1;
    case "down":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Reducer1 = () => {
  const [number, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => dispatch("up")}>up</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <button onClick={() => dispatch("down")}>down</button>
    </div>
  );
};

export default Reducer1;
