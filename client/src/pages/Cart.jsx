import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import OrderConfirm from './OrderConfirm';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Organic Apples', price: 2.99, quantity: 2 },
    { id: 2, name: 'Free-range Eggs', price: 4.99, quantity: 1 },
    { id: 3, name: 'Santra', price: 5.99, quantity: 4 },
  ]);

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    
    <><div><Navbar /></div><div className="min-h-screen" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
              {cartItems.length > 0 ? (
                  <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                          {cartItems.map((item) => (
                              <div className="flex items-center justify-between border-b border-gray-200 py-4" key={item.id}>
                                  <div className="flex items-center">
                                      <img className="w-16 h-16 rounded-full object-cover mr-4" src={`images/${item.id}.jpg`} alt={item.name} />
                                      <div>
                                          <h3 className="font-medium">{item.name}</h3>
                                          <p className="text-gray-500">${item.price} x {item.quantity}</p>
                                      </div>
                                  </div>
                                  <div className="flex items-center">
                                      <button className="bg-gray-200 px-4 py-2 rounded-l-lg" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                      <span className="bg-gray-100 px-4 py-2">{item.quantity}</span>
                                      <button className="bg-gray-200 px-4 py-2 rounded-r-lg" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                      <button className="ml-4 text-red-500 font-medium" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                  </div>
                              </div>
                          ))}
                      </div>
                      <div className="col-span-1">
                          <div className="bg-gray-100 p-4">
                              <h3 className="font-medium">Total: ${getTotalPrice()}</h3>
                              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full w-full font-medium" >Checkout</button>
                          </div>
                      </div>
                  </div>
                  
              ) : (
                  <p>Your cart is currently empty.</p>
              )}
          </div>
      </div></>
          );
          };
          export default Cart;