import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './cara.css';
import Cards from './components/Cards';
import Carousel from "./components/Carousel"; import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Exp from './components/Exp';

function App() {
  const [produce, setProduce] = useState([
    {
      title: "ABC",
      price: 12,
      class: "Organic"
    }
  ]);

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/produce")
    .then((res) => {
      setProduce(res.data);
    })
    .catch((err) => {
      console.log("Error");
    });
  }, []);

  const produceList = produce.length === 0 ? "No produce" : produce.map((prod,key) => <Cards title={prod.title} price={prod.price} class={prod.class} key={key} />);

  return (
    <div class="grid grid-cols-4 gap-4">
      {produceList}
    </div>
  );
}

export default App;
