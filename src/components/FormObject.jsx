import React, { useState } from "react";

const FormObject = () => {
  const [data, setData] = useState({ name: "", age: "" });
  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
        placeholder="Age"
      />
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default FormObject;
