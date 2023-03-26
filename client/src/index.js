import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Exp from './pages/ProductPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductRegistration from './pages/ProductRegistration';

import Cart from './pages/Cart';

import About from './pages/About';
import Delivery from './pages/Delivery';
import Complaint from './pages/Complaint';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/producePage" element={<Exp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productRegistration" element={<ProductRegistration />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
