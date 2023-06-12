import React, { useState } from "react";

function ContadorPessoas() {
  const [counters, setCounters] = useState({
    homens: 0,
    mulheres: 0,
  });

  const handleCounterChange = (counter, value) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [counter]: prevCounters[counter] + value >= 0 ? prevCounters[counter] + value : 0,
    }));
  };

  const { homens, mulheres } = counters;
  const totalPessoas = homens + mulheres;

  return (
    <div>
      <h4>Total de pessoas: {totalPessoas}</h4>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img src="https://img.freepik.com/vetores-gratis/um-desenho-de-um-homem-asiatico_1308-86649.jpg?w=360&t=st=1686538819~exp=1686539419~hmac=78f427668f2ee360031bd02eaf9ce75fc5f95861783473c64494c4cbee2feacd" alt="Homens" height={200} />
          <h4>Homens: {homens}</h4>
          <button onClick={() => handleCounterChange("homens", 1)}>+</button>
          <button onClick={() => handleCounterChange("homens", -1)}>-</button>
        </div>
        <div>
          <img src="https://img.freepik.com/vetores-gratis/um-desenho-simples-de-uma-menina-asiatica_1308-39505.jpg?w=360&t=st=1686538840~exp=1686539440~hmac=b341e385ded1fa393141346a063092bb95edbdd232be123fa2e32b86720d5024" alt="Mulheres" height={200} />
          <h4>Mulheres: {mulheres}</h4>
          <button onClick={() => handleCounterChange("mulheres", 1)}>+</button>
          <button onClick={() => handleCounterChange("mulheres", -1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default ContadorPessoas;
