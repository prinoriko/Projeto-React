import logo from './logo.svg';
import './App.css';
import Letreiro from './components/Letreiro';
import MyApp from './components/MyApp';
import MyButton from './components/MyButton';
import Gallery from './components/Gallery';


function App() {
  return (
      <div className='App'>
        <Letreiro />
        <MyButton />
        <MyApp /> 
        <Gallery />
      </div>
  );
}

export default App;
