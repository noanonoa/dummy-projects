import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  
  const operations = {
    '/': (previousValue, nextValue) => previousValue / nextValue,
    '*': (previousValue, nextValue) => previousValue * nextValue,
    '+': (previousValue, nextValue) => previousValue + nextValue,
    '-': (previousValue, nextValue) => previousValue - nextValue,
    '=': (previousValue, nextValue) => nextValue
  };

  function inputDigit(digit) {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
    display === '0' ? setDisplay(String(digit)) : setDisplay(display + String(digit));
    }
  };

  function inputDecimal() {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setWaitingForOperand(false);
    }
  };

  function clearDisplay() {
    setDisplay('0');
    setWaitingForOperand(false);
    setOperator(null);
    setPreviousValue(null);
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

  function performOperation(operatorType) {
    const input = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(input);
    }

    else if (operator) {
      const currentValue = previousValue || 0;
      const newValue = operations[operator](currentValue, input);
      
      setPreviousValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(operatorType);
  };


  return (
    <div className="calculator">
      <div className="display">
        <div className="display-text">{ display }</div>
      </div>
      <div className="keypad">
        <button className="btn function" onClick={() => clearDisplay()}>AC</button>
        <button className="btn function" onClick={() => toggleSign()}>+/-</button>
        <button className="btn function" onClick={() => inputPercentage()}>%</button>
        <button className="btn operator" onClick={() => performOperation('/')}>÷</button>
        <button className="btn digit" onClick={() => inputDigit(7)}>7</button>
        <button className="btn digit" onClick={() => inputDigit(8)}>8</button>
        <button className="btn digit" onClick={() => inputDigit(9)}>9</button>
        <button className="btn operator" onClick={() => performOperation('*')}>x</button>
        <button className="btn digit" onClick={() => inputDigit(4)}>4</button>
        <button className="btn digit" onClick={() => inputDigit(5)}>5</button>
        <button className="btn digit" onClick={() => inputDigit(6)}>6</button>
        <button className="btn operator" onClick={() => performOperation('-')}>−</button>
        <button className="btn digit" onClick={() => inputDigit(1)}>1</button>
        <button className="btn digit" onClick={() => inputDigit(2)}>2</button>
        <button className="btn digit" onClick={() => inputDigit(3)}>3</button>
        <button className="btn operator" onClick={() => performOperation('+')}>+</button>
        <button className="btn digit key-0" onClick={() => inputDigit(0)}>0</button>
        <button className="btn digit" onClick={() => inputDecimal()}>.</button>
        <button className="btn operator" onClick={() => performOperation('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;