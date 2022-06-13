import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game";
import Title from "./Title";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Title />
    <Game />
  </div>

);
