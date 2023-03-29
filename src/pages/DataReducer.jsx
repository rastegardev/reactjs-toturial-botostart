import { Action } from "@remix-run/router";
import React, { useReducer, useEffect } from "react";

import axios from "axios";

const initialState = {
  isLoading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "succes":
      return {
        isLoading: false,
        post: action.payload,
        error: "",
      };
    case "failed":
      return {
        isLoading: false,
        post: {},
        error: "An error occured",
      };
    default:
      return state;
  }
};

const DataReducer = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "succes", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "failed" });
      });
  });
  return (
    <div>
      <h1>{data.isLoading ? "Loading" : data.post.body}</h1>
      <p>{data.error && data.error}</p>
    </div>
  );
};

export default DataReducer;
