import React, { useState, useCallback } from "react";

import Callback12 from "./Callback1-2";
import Callback13 from "./Callback1-3";

const Callback1 = () => {
  const [valueA, setValueA] = useState("A");
  const [valueB, setValueB] = useState("B");

  const changeA = useCallback(() => {
    setValueA("AA");
  }, [valueA]);

  const changeB = useCallback(() => {
    setValueB("BB");
  }, [valueB]);

  console.log("App Rendered");

  return (
    <div>
      <Callback12 value={valueA} changeHandler={changeA} />
      <Callback13 value={valueA} changeHandler={changeB} />
    </div>
  );
};

export default Callback1;
