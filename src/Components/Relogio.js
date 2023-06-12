import { useState, useEffect } from 'react';

function Relogio() {
  const [horarioAtual, setHorarioAtual] = useState('');

  useEffect(() => {
    function exibirHora() {
      let dataAtual = new Date();
      let hrs = dataAtual.getHours();
      let min = dataAtual.getMinutes();
      let seg = dataAtual.getSeconds();

      if (hrs < 10) {
        hrs = "0" + hrs;
      }

      if (min < 10) {
        min = "0" + min;
      }

      if (seg < 10) {
        seg = "0" + seg;
      }

      let horarioAtual = hrs + ":" + min + ":" + seg;

      setHorarioAtual(horarioAtual);
    }

    const intervalId = setInterval(exibirHora, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Exercicio 1 - Relógio:</p>
      <h2>{horarioAtual}</h2>
    </div>
  );
}

export default Relogio;
