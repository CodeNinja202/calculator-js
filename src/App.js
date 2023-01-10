import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [accumulator, setAccumulator] = useState(null);

  function inputDigit(digit) {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(
        displayValue === '0' ? String(digit) : displayValue + digit
      );
    }
  }

  function inputDot() {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  }
 function inputOperator(newOperator) {
  const inputValue = parseFloat(displayValue);
  if (newOperator === '=') {
    setAccumulator(null);
  }
  
  if (accumulator === null) {
    setAccumulator(inputValue);
  } else if (operator && (operator !== '-' || newOperator !== '-')) {
    const result = performCalculation[operator](accumulator, inputValue);
    setAccumulator(result);
    setDisplayValue(String(result));
  }
  
  setWaitingForOperand(true);
  setOperator(newOperator);
}

  
  
  
  
  
  function clear() {
    setAccumulator(null);
    setOperator(null);
    setDisplayValue('0');
    setWaitingForOperand(false);
  }

  const performCalculation = {
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '=': (x, y) => y
  };
  return (
    <div className="App">
      <div id="display">{displayValue}</div>
      <button id="clear" onClick={clear}>
        AC
      </button>
      <button id="divide" onClick={() => inputOperator('/')}>
        /
      </button>
      <button id="multiply" onClick={() => inputOperator('*')}>
        *
      </button>
      <button id="seven" onClick={() => inputDigit(7)}>
        7
      </button>
      <button id="eight" onClick={() => inputDigit(8)}>
        8
      </button>
      <button id="nine" onClick={() => inputDigit(9)}>
        9
      </button>
      <button id="subtract" onClick={() => inputOperator('-')}>
        -
      </button>
      <button id="four" onClick={() => inputDigit(4)}>
        4
      </button>
    <button id="five" onClick={() => inputDigit(5)}>
        5
      </button>
      <button id="six" onClick={() => inputDigit(6)}>
        6
      </button>
      <button id="add" onClick={() => inputOperator('+')}>
        +
      </button>
      <button id="one" onClick={() => inputDigit(1)}>
        1
      </button>
      <button id="two" onClick={() => inputDigit(2)}>
        2
      </button>
      <button id="three" onClick={() => inputDigit(3)}>
        3
      </button>
      <button id="zero" onClick={() => inputDigit(0)}>
        0
      </button>
      <button id="decimal" onClick={inputDot}>
        .
      </button>
      <button id="equals" onClick={() => inputOperator('=')}>
        =
      </button>
    </div>
  );
}

export default App;
