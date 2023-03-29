import React from "react";

const Callback13 = (props) => {
  console.log("changeB");

  return (
    <div>
      <p>Components B: {props.value}</p>
      <button onClick={props.changeHandler}>Change B</button>
    </div>
  );
};

export default React.memo(Callback13);
