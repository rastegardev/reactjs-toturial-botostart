import React, { useState } from "react";

const FormObject = () => {
  const [data, setData] = useState(["item"]);
  return (
    <div>
      <h1>Form</h1>
      <button onClick={() => setData([...data, "newItem"])}>Add</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default FormObject;
