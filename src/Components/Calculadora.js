import React, { useState } from 'react';

const Calculadora = () => {
  const [valorVisor, setValorVisor] = useState('0');

  const handleClick = (valor) => {
    if (valorVisor === '0') {
      setValorVisor(valor);
    } else {
      setValorVisor(valorVisor + valor);
    }
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(valorVisor);
      setValorVisor(resultado.toString());
    } catch (error) {
      setValorVisor('Erro');
    }
  };

  const limparVisor = () => {
    setValorVisor('0');
  };

  return (
    <div className="calculator">
      <div className="display">{valorVisor}</div>
      <div className="buttons">
        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button" onClick={() => handleClick('+')}>+</button>
        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button" onClick={() => handleClick('-')}>-</button>
        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button" onClick={() => handleClick('*')}>*</button>
        <button className="button" onClick={() => handleClick('0')}>0</button>
        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button" onClick={() => calcularResultado()}>=</button>
        <button className="button" onClick={() => handleClick('/')}>/</button>
        <button className="button" onClick={() => limparVisor()}>C</button>
      </div>
    </div>
  );
};

export default Calculadora;
