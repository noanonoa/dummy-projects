import React from "react";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="keypad">
        <button className="btn function">AC</button>
        <button className="btn function">+/-</button>
        <button className="btn function">%</button>
        <button className="btn operator">÷</button>
        <button className="btn digit">7</button>
        <button className="btn digit">8</button>
        <button className="btn digit">9</button>
        <button className="btn operator">x</button>
        <button className="btn digit">4</button>
        <button className="btn digit">5</button>
        <button className="btn digit">6</button>
        <button className="btn operator">-</button>
        <button className="btn digit">1</button>
        <button className="btn digit">2</button>
        <button className="btn digit">3</button>
        <button className="btn operator">+</button>
        <button className="btn digit key-0">0</button>
        <button className="btn digit">.</button>
        <button className="btn operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;