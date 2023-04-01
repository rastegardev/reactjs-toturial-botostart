import React, { useRef, useEffect } from "react";

const UseRef = () => {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(input.current.value);
  };

  return (
    <>
      <form>
        <input ref={input} type="text" placeholder="Name" />
        <button type="submit" onClick={clickHandler}>
          click
        </button>
      </form>
    </>
  );
};

export default UseRef;
