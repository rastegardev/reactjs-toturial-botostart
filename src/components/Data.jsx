import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/todos/`;
    axios.get(URL).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1> JSON Placeholder</h1>
      {data.length ? (
        data.map((item) => <h3 key={item.id}>{item.title}</h3>)
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Data;
