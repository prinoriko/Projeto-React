import Gallery from "./Components/Gallery";
import ToDoList from "./Components/ToDoList";
import { Link } from "react-router-dom";

export default function Atv03(){
    return (
        <>
          <h2> Atividade 03</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          <Gallery />
          <ToDoList />
        </>
    );
}
