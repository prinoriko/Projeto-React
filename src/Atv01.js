import Relogio from "./Components/Relogio";
import Letreiro from "./Components/Letreiro";
import { Link } from "react-router-dom";

export default function Atv01(){
    return (
        <>
          <h2> Atividade 01</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          <Relogio />
          <Letreiro />
        </>
    );
}
