import React, { useState, useEffect, useContext } from 'react';
import '../css/OrderSucess.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { UserContext } from '../Const/UserContext';

const OrderSucess = () => {
  const {itemsSucess} =useContext(UserContext)
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

  return(
    <div className={`order-success-container ${showAnimation ? 'animate-slide-in' : ''}`}>
      <h1 className="text-4xl font-bold text-green-500 mb-4">Order Successful!</h1>
      <p className="text-lg mt-4">Your order has been placed successfully. Thank you for your purchase!</p>
      <p className="text-lg mt-4">Here's a quick summary of your order:</p>
      <div className="mt-4">
        {itemsSucess.map((data, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 border-l-4 border-green-500">
            <p className="text-xl font-semibold">{data.card.info.name}</p>
            <p className="text-lg">Quantity: 1</p>
            <p className="text-lg">Price: ₹ {data.card.info.defaultPrice / 100}</p>
          </div>
        ))}
      </div>
      <Link to='/'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default OrderSucess;
