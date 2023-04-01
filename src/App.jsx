import React, { useState } from "react";

import "./App.css";

// import UseRef from "./components/UseRef";
import LoginPage from "./components/LoginPage";
import Landing from "./components/Landing";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* <UseRef /> */}

      {toggle ? <Landing /> : <LoginPage />}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </>
  );
}

export default App;
