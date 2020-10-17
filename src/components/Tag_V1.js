import React from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

// Tag GIF V1
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const Tag = () => {
  return (
    <>
      <h1>Tag</h1>
    </>
  );
};

export default Tag;
