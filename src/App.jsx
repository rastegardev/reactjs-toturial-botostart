// import React, { useState } from "react";
import React, { useState } from "react";

import "./App.css";

import Counter from "./components/Counter";
import FormObject from "./components/FormObject";
import FormArray from "./components/FormArray";
import UseEffectApp from "./components/UseEffectApp";
import Data from "./components/Data";

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {/* <Counter /> */}
      {/* <FormObject /> */}
      {/* <FormArray /> */}

      {/* {isShow && <UseEffectApp />}
      <button onClick={() => (isShow ? setIsShow(false) : setIsShow(true))}>
        DELETE
      </button> */}

      {/* <Data /> */}
    </>
  );
}

export default App;
