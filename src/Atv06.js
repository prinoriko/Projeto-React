import Calculadora from "./Components/Calculadora";
import { Link } from "react-router-dom";
import './calc.css';

export default function Atv06(){
    return (
        <>
          <h2> Atividade 06</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          <div className="calc">
          <Calculadora />
          </div>
        </>
    );
}
