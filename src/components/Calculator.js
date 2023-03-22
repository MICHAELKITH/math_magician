import React, { useState } from 'react';
import './style/Calculator.css';
import BottomValue from './BottomValue';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const handleClick = (e) => {
    setResult((obj) => calculate(obj, e.target.innerText));
  };
  return (
    <div id="calculator-body">
      <div id="calculator-screen">
        <BottomValue result={result.next || result.total || '0'} />
      </div>
      <div id="calculator-buttons">
        <button onClick={handleClick} type="button">
          AC
        </button>
        <button onClick={handleClick} type="button">
          +/-
        </button>
        <button onClick={handleClick} type="button">
          %
        </button>
        <button onClick={handleClick} type="button" className="orange-button">
          ÷
        </button>
        <button onClick={handleClick} type="button">
          7
        </button>
        <button onClick={handleClick} type="button">
          8
        </button>
        <button onClick={handleClick} type="button">
          9
        </button>
        <button onClick={handleClick} type="button" className="orange-button">
          x
        </button>
        <button onClick={handleClick} type="button">
          4
        </button>
        <button onClick={handleClick} type="button">
          5
        </button>
        <button onClick={handleClick} type="button">
          6
        </button>
        <button onClick={handleClick} type="button" className="orange-button">
          -
        </button>
        <button onClick={handleClick} type="button">
          1
        </button>
        <button onClick={handleClick} type="button">
          2
        </button>
        <button onClick={handleClick} type="button">
          3
        </button>
        <button onClick={handleClick} type="button" className="orange-button">
          +
        </button>
        <button onClick={handleClick} type="button" id="zero">
          0
        </button>
        <button onClick={handleClick} type="button">
          .
        </button>
        <button onClick={handleClick} type="button" className="orange-button">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
