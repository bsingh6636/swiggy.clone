import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearItem } from '../Const/cartSlice';


const PaymentPage = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [processing, setProcessing] = useState(false);
  const dispatch = useDispatch();


  const navigate = useNavigate();


  const handlePayment = () => {
   
      navigate('/sucessfull');
   
    dispatch(clearItem())
    setProcessing(true);
    setTimeout(() => {
    
      setCreditCardNumber('');
      setExpiryDate('');
      setCvv('');
      setHomeAddress('');
      setProcessing(false);
     
      
    }, 100);
    
  };
  

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Payment Details</div>
          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="creditCardNumber" className="block text-gray-700 text-sm font-bold mb-2">Credit Card Number:</label>
              <input
                type="text"
                id="creditCardNumber"
                value={creditCardNumber}
                onChange={(e) => setCreditCardNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex mb-4">
              <div className="mr-4 w-1/2">
                <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">Expiry Date:</label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => {
                    const formattedDate = e.target.value.replace(/(\d{2})\/(\d{2})$/, '$1/$2');
                    setExpiryDate(formattedDate);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="homeAddress" className="block text-gray-700 text-sm font-bold mb-2">Home Address:</label>
              <input
                type="text"
                id="homeAddress"
                value={homeAddress}
                onChange={(e) => setHomeAddress(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handlePayment}
                disabled={processing}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${processing? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {processing? 'Processing...' : 'Pay'}
              </button>
            </div>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default PaymentPage;
