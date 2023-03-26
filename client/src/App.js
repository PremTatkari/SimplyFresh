import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './cara.css'
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  const [farms, setFarm] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/farmer")
    .then((res) => {
      setFarm(res.data);
    })
    .catch((err) => {
      console.log("Error");
    });
  }, []);

  const farmList = farms.length === 0 ? "No farms" : farms.map((farm,key) => <Cards title={farm.farm_name} price={5} class={farm.farm_address} key={key} />);

  return (
    <div>
      <Navbar />
      <Carousel />
    <div class="grid grid-cols-4 gap-4">
      {farmList}
    </div>
    </div>
  );
}

export default App;
