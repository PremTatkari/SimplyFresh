import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Exp from './components/Exp';
import ProductRegistration from './pages/ProductRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/producePage" element={<Exp />} />
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
