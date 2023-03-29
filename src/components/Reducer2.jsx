import React, { useReducer } from "react";

// useReducer
const initialState = {
  num1: 0,
  num2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "up":
      return { ...state, num1: state.num1 + action.amount };
    case "down":
      return { ...state, num1: state.num1 - action.amount };
    case "up2":
      return { ...state, num2: state.num2 + action.amount };
    case "down2":
      return { ...state, num2: state.num2 - action.amount };
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
      <div>
        <h1>Number1: {number.num1}</h1>
        <button onClick={() => dispatch({ type: "up", amount: 5 })}>up</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <button onClick={() => dispatch({ type: "down", amount: 3 })}>
          down
        </button>
      </div>
      <div>
        <h1>Number2: {number.num2}</h1>
        <button onClick={() => dispatch({ type: "up2", amount: 2 })}>up</button>
        <button onClick={() => dispatch({ type: "reset2" })}>reset</button>
        <button onClick={() => dispatch({ type: "down2", amount: 1 })}>
          down
        </button>
      </div>
    </div>
  );
};

export default Reducer1;
