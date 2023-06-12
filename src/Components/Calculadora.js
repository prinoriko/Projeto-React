import React, { useState } from 'react';

const Calculadora = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    setDisplayValue((prevDisplayValue) => {
      if (prevDisplayValue === '0' && value !== '.') {
        return value;
      }
      return prevDisplayValue + value;
    });
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  return (
    <div className="Calculadora">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '/'].map((value) => (
          <button key={value} className="button" onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button className="button" onClick={clearDisplay}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculadora;

