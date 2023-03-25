import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './cara.css'
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Console from './Fcomponents/Console';
import Signup from './components/Signup'

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/product")
    .then((res) => {
      setProduct(res.data);
    })
    .catch((err) => {
      console.log("Error");
    });
  }, []);

  const productList = products.length === 0 ? "No products" : products.map((product,key) => <Cards title={product.title} price={product.price} class={product.class} key={key} />);

  return (
    <div>
      <Navbar />
      <Carousel />
    <div class="grid grid-cols-4 gap-4">
      {productList}
    </div>
    </div>
  );
}

export default App;
