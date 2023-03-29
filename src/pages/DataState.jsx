import React, { useState, useEffect } from "react";

import axios from "axios";

const DataState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setIsLoading(false);
        setPost(response.data);
        setError("");

        console.log(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setPost({});
        setError("An error occured!");
      });
  }, []);

  return (
    <div>
      <h1>{isLoading ? "Loading" : post.body}</h1>
      <p>{error && error}</p>
    </div>
  );
};

export default DataState;
