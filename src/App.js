import React from "react";
import "./styles.css";
// import Random from "./components/Random_V1";
// import Tag from "./components/Tag_V1";
import Random from "./components/Random_V2";
import Tag from "./components/Tag_V2";

export default function App() {
  return (
    <div>
      <h1>Random Gif Application</h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
