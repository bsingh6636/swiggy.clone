import React, { useState, useEffect } from 'react';
import '../css/OrderSucess.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const OrderSucess = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleAnimation = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // Hide after 3 seconds
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <div className={`order-success-container ${showAnimation? 'animate-slide-in' : ''}`}>
      <h1 className="text-4xl font-bold text-green-500">Order Successful!</h1>
      <p className="text-lg mt-4">Your order has been placed successfully. Thank you for your purchase!</p>
      <p className="text-lg mt-4">Here's a quick summary of your order:</p>
      <ul className="list-disc pl-5 mt-2">
        <li>Item: Example Item</li>
        <li>Quantity: 1</li>
        <li>Price: ₹100</li>
      </ul>
      <Link to='/'> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Continue Shopping
      </button></Link>
      
    </div>
  );
};

export default OrderSucess;
