import FormQuiz from "./Components/FormQuiz";
import FormTicket from "./Components/FormTicket";
import Accordion from "./Components/Accordion";
import Messenger from "./Components/Messenger";
import { Link } from "react-router-dom";


export default function Atv05(){
    return (
        <>
          <h2> Atividade 05</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          <FormQuiz />
          <FormTicket />
          <Accordion />
          <Messenger />
        </>
    );
}
