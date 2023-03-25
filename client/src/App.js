import './App.css';
import './cara.css';
import Cards from './components/Cards';
import Carousel from "./components/Carousel";import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Exp from './components/Exp';

function App() {
  return (
    <div class="grid grid-cols-4 gap-4">
      
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Carousel></Carousel></div>
      
      <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>


      
    </div>
  );
}

export default App;
