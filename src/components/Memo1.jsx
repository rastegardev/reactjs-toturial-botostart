import React, { useMemo, useState } from "react";

const Memo1 = () => {
  const [isShow, setIsShow] = useState(true);
  const [number, setNumber] = useState(0);

  const slow = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return isShow;
  }, [isShow]);

  const showHandler = () => {
    setIsShow(!isShow);
  };

  const numberHandler = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
      <div>
        <h2>{slow ? "Show" : "Hide"}</h2>
        <button onClick={showHandler}>Show or Hide</button>
      </div>
      <div>
        <h2>{number}</h2>
        <button onClick={numberHandler}>Plus 1</button>
      </div>
    </div>
  );
};

export default Memo1;
