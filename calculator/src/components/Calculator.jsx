import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {

  const [display, setDisplay] = useState('0');

  function inputDigit(digit) {
    display === '0' ? setDisplay(String(digit)) : setDisplay(display + String(digit));
  };

  function inputDecimal() {
    if (display.indexOf('.') === -1) setDisplay(display + '.');
  };

  function clearDisplay() {
    setDisplay('0');
  };

  function toggleSign() {
    const newValue = parseFloat(display) * -1;
    setDisplay(String(newValue));
  };

  function inputPercentage() {
    const currentValue = parseFloat(display);
    if (currentValue === 0) return;
    setDisplay(String(currentValue / 100));
  };

  return (
    <div className="calculator">
      <div className="display">{ display }</div>
      <div className="keypad">
        <button className="btn function" onClick={() => clearDisplay()}>AC</button>
        <button className="btn function" onClick={() => toggleSign()}>+/-</button>
        <button className="btn function" onClick={() => inputPercentage()}>%</button>
        <button className="btn operator">÷</button>
        <button className="btn digit" onClick={() => inputDigit(7)}>7</button>
        <button className="btn digit" onClick={() => inputDigit(8)}>8</button>
        <button className="btn digit" onClick={() => inputDigit(9)}>9</button>
        <button className="btn operator">x</button>
        <button className="btn digit" onClick={() => inputDigit(4)}>4</button>
        <button className="btn digit" onClick={() => inputDigit(5)}>5</button>
        <button className="btn digit" onClick={() => inputDigit(6)}>6</button>
        <button className="btn operator">-</button>
        <button className="btn digit" onClick={() => inputDigit(1)}>1</button>
        <button className="btn digit" onClick={() => inputDigit(2)}>2</button>
        <button className="btn digit" onClick={() => inputDigit(3)}>3</button>
        <button className="btn operator">+</button>
        <button className="btn digit key-0" onClick={() => inputDigit(0)}>0</button>
        <button className="btn digit" onClick={() => inputDecimal()}>.</button>
        <button className="btn operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;