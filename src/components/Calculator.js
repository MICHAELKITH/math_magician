import React, { useState } from 'react';
import '../styles/Calculator.css';
import Value from './Value';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const handleClick = (e) => {
    setResult((obj) => calculate(obj, e.target.innerText));
  };
  return (
    <div className="calculator-main">
      <div className="calculator-screen">
        <Value result={result.next || result.total || '0'} />
      </div>
      <div className="calculator-buttons">
        <button onClick={handleClick} type="button">
          AC
        </button>
        <button onClick={handleClick} type="button">
          +/-
        </button>
        <button onClick={handleClick} type="button">
          %
        </button>
        <button onClick={handleClick} type="button" className="end-button">
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
        <button onClick={handleClick} type="button" className="end-button">
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
        <button onClick={handleClick} type="button" className="end-button">
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
        <button onClick={handleClick} type="button" className="end-button">
          +
        </button>
        <button onClick={handleClick} type="button" className="initial">
          0
        </button>
        <button onClick={handleClick} type="button">
          .
        </button>
        <button onClick={handleClick} type="button" className="end-button">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
