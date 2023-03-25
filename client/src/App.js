import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './cara.css';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Console from './Fcomponents/Console';
import Signup from './components/Signup'

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
    <div>
      
      <Signup/>
    </div>
  );
}

export default App;
