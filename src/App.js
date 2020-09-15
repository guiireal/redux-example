import React from "react";

import Interval from "./components/Interval";
import Average from "./components/Average";
import Sum from "./components/Sum";
import Sort from "./components/Sort";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Average />
        <Sum />
        <Sort />
      </div>
    </div>
  );
}

export default App;
