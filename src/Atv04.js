import Toolbar from "./Components/Toolbar";
import Gallerys from "./Components/Gallerys";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import MovingDot from "./Components/MovingDot";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import List from "./Components/List";
import List2 from "./Components/List2";
import ShapeEditor from "./Components/ShapeEditor";
import CounterList from "./Components/CounterList";
import List3 from "./Components/List3";
import List4 from "./Components/List4";
import BucketList from "./Components/BucketList";
import { Link } from "react-router-dom";

export default function Atv04(){
    return (
        <>
          <h2> Atividade 04</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          <Toolbar />
          <Gallerys />
          <Counter />
          <Form />
          <MovingDot />
          <Form2 />
          <Form3 />
          <List />
          <List2 />
          <ShapeEditor />
          <CounterList />
          <List3 />
          <List4 />
          <BucketList />
        </>
    );
}
