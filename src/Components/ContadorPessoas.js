import React, { useState } from "react";

function PeopleCounter() {
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
          <img src="https://img.icons8.com/?size=512&id=21441&format=png" alt="Homens" height={200} />
          <h4>Homens: {homens}</h4>
          <button onClick={() => handleCounterChange("homens", 1)}>+</button>
          <button onClick={() => handleCounterChange("homens", -1)}>-</button>
        </div>
        <div>
          <img src="https://img.icons8.com/?size=512&id=gaDLspgb71QY&format=png" alt="Mulheres" height={200} />
          <h4>Mulheres: {mulheres}</h4>
          <button onClick={() => handleCounterChange("mulheres", 1)}>+</button>
          <button onClick={() => handleCounterChange("mulheres", -1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default PeopleCounter;
