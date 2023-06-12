import React, { useState } from 'react';

function Calculadora() {
  const [display, setDisplay] = useState('0');



  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
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
};

export default Calculadora;
