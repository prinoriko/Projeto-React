import React, { useState } from 'react';

function Calculadora() {
 const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    let newDisplay = display;

    switch (value) {
      case 'AC':
        newDisplay = '0';
        break;
      case '=':
        try {
          newDisplay = eval(display).toString();
        } catch (error) {
          newDisplay = 'Error';
        }
        break;
      default:
        newDisplay = display === '0' ? value : display + value;
        break;
    }

    setDisplay(newDisplay);
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="Calculadora">
      <div className="display">{display}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '/'].map((value) => (
          <button key={value} className="button" onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button className="button" onClick={() => handleButtonClick('C')}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculadora;
