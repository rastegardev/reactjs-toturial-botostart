import React, { useContext } from "react";

import { NameContext, AgeContext } from "../../App";

const ComB = () => {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);

  return (
    <>
      <h1>
        My name is {name} and {age} years old!
      </h1>
    </>
  );
};

export default ComB;
