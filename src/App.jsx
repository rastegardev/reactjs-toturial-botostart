import React, { useState } from "react";

import "./App.css";

// import UseRef from "./components/UseRef";
// import LoginPage from "./components/LoginPage";
// import Landing from "./components/Landing";

import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const [toggle, setToggle] = useState(true);

  const [name, setName] = useLocalStorage("name", "");

  return (
    <>
      {/* <UseRef /> */}
      {/* {toggle ? <Landing /> : <LoginPage />}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button> */}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="type here"
      />
    </>
  );
}

export default App;
