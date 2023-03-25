// import React, { useState } from "react";
import React, { useState } from "react";

import "./App.css";

// import Counter from "./components/Counter";
// import FormObject from "./components/FormObject";
// import FormArray from "./components/FormArray";
// import UseEffectApp from "./components/UseEffectApp";
// import Data from "./components/Data";
import ComA from "./components/ContextTorurial/ComA";

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  // const [isShow, setIsShow] = useState(true);
  const [name, setName] = useState("reza");
  const [age, setAge] = useState(19);

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

      <NameContext.Provider value={name}>
        <AgeContext.Provider value={age}>
          <ComA name={name} age={age} />
        </AgeContext.Provider>
      </NameContext.Provider>
    </>
  );
}

export default App;
