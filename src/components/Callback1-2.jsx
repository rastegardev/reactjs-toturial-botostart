import React from "react";

const Callback12 = (props) => {
  console.log("changeA");

  return (
    <div>
      <p>Components A: {props.value}</p>
      <button onClick={props.changeHandler}>Change A</button>
    </div>
  );
};

export default React.memo(Callback12);
