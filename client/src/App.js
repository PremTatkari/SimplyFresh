import './App.css';
import './cara.css';
import Cards from './components/Cards';
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <div><Carousel></Carousel></div>
      
      <div><Cards></Cards></div>
      <div><Cards></Cards></div>
      <div><Cards></Cards></div>
    </div>
  );
}

export default App;
