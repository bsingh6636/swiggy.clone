import React, { useState, useRef, useEffect } from "react";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { CartItemupdated, CheckItemCart } from "./ItemCart";
import { initializeApp } from "firebase/app";
import { userSignin } from "../Const/UserSlice";
import PaymentPage from "./Paymentpage";
import OrderSucess from "./OrderSucess";

export const CartItems = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((store) => store.User.user);
  const Cartwithbutton = CartItemupdated(CheckItemCart);
  const Citems = useSelector((store) => store.Cart.items);
  const inputPhoneRef = useRef(null);
  const verificationCodeRef = useRef(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null); 
  const [inputphonenumberbox, setinputphonenumberbox] = useState(false);
  const [verificationbox, setverificationbox] = useState(false);
  const [errormsgphone, seterrormsgphone] = useState(null);
  const [errormsgcode, seterrormsgcode] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [OrderSucessful,setOrderSucessful] = useState(false)

  let finalPrice = 0;
  Citems.forEach((cartItem) => {
    finalPrice += cartItem.card?.info?.price / 100 || cartItem.card?.info?.defaultPrice / 100;
  });
  const gstCharge = ((12 / 100) * finalPrice).toFixed(2);
  const finalPricewithgst = finalPrice + parseFloat(gstCharge);


  const firebaseConfig = {
    apiKey: "AIzaSyBxA1s513imWnuxE63yVQOZv6Pmb0sgUfs",
    authDomain: "swiggyclone-51356.firebaseapp.com",
    projectId: "swiggyclone-51356",
    storageBucket: "swiggyclone-51356.appspot.com",
    messagingSenderId: "953452650435",
    appId: "1:953452650435:web:09df0bba9f00c8c3432776",
    measurementId: "G-THF74F8VJF"
  };

  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    const auth = getAuth();
    const recaptchaContainer = document.getElementById("recaptcha-container");

    const recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainer, {
      size: "invisible",
      callback: (response) => {
        console.log("captcha solved");
      }
    });

    setRecaptchaVerifier(recaptchaVerifier);
  }, []);

  const handleSignin = () => {
    const auth = getAuth();
    const phoneNumber = inputPhoneRef.current.value;
    const appVerifier = recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log("Code sent successfully");
        setConfirmationResult(confirmationResult);
        setverificationbox(true);
        if (errormsgphone !== null) {
          seterrormsgphone(null);
        }
        setProcessing(true);
        setTimeout(() => {
          setProcessing(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        seterrormsgphone("Invalid format");
      });
  };

  const handleVerification = () => {
    const code = verificationCodeRef.current.value;
    confirmationResult.confirm(code)
      .then((result) => {
        console.log("User signed in successfully.");
        const user = result.user;
        console.log(user.phoneNumber);
        dispatch(userSignin(user.phoneNumber));
        localStorage.setItem("swiggyuser", user.phoneNumber);
        if (errormsgcode !== null) {
          seterrormsgcode(null);
        }
        setProcessing(true);
        setTimeout(() => {
          setProcessing(false);
        }, 3000);
        setverificationbox(false)
      })
      .catch((error) => {
        console.log(error);
        seterrormsgcode("Invalid Code");
      });
  };

  return (
    <div className="flex flex-wrap justify-center px-20 py-5 bg-gray-200 ">
     
      <div>
        { OrderSucessful  ?  <OrderSucess/> : Citems.length === 0 ? (
          <img className="w-1/2 h-4/5 ml-[300px] flex justify-center" src="https://th.bing.com/th/id/OIG4.1O6SqhU5y3pPbh108oqx?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Add to Cart" />
        ) : (
          <div>
            {Citems.map((cartItem, index) => (
              <div key={index}>
                <Cartwithbutton items={cartItem} />
              </div>
            ))}
          </div>
        )}
      </div>
      {Citems.length === 0 ? (
        <h1>Add something to Cart</h1>
      ) : (
        <div className="p-5  bg-white">
          <h3 className="text-lg m-1 p-1">Bill details:</h3>
          <div className="flex flex-wrap border-b border-stone-950 text-base">
            <div>
              <p className="m-1 p-1">Items Total</p>
              <p className="m-1 p-1">Delivery Partner fee</p>
              <p className="m-1 p-1">GST and Restaurant Charges</p>
            </div>
            <div>
              <p className="m-1 p-1">{finalPrice}</p>
              <p className="text-green-600 m-1 p-1">FREE</p>
              <p className="m-1 p-1">{gstCharge}</p>
            </div>
          </div>
          <div className="flex flex-wrap text-xl">
            <div><p className="m-1 p-1">To Pay</p></div>
            <div><p className="m-1 p-1">{finalPricewithgst}</p></div>
          </div>
          <button className="bg-green-600 rounded-lg text-white p-3 w-full m-1" onClick={() => { setinputphonenumberbox(true) }}>Place Order</button>   <br />
          {inputphonenumberbox === false ? null : (
            <div>
              {phoneNumber !== null ? <PaymentPage /> : (
                <>
                  <input ref={inputPhoneRef} placeholder="Phone Number" className="border w-full  rounded-lg border-black p-2 m-1" /><br />
                  <p className="text-red-600 font-medium flex justify-center">{errormsgphone}</p>
                  <button className={`bg-green-600 w-full p-3 rounded-lg text-white m-1 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleSignin}>Login</button>    <br />
                </>
              )}
              {verificationbox === false ? null :
                <>
                  <input ref={verificationCodeRef} placeholder="Verification Code" className="border rounded-lg border-black w-full p-2 m-1" /><br />
                  <p className="text-red-600 font-medium flex justify-center">{errormsgcode}</p>
                  <button className={`bg-green-600 rounded-lg text-white w-full p-3 m-1 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleVerification}>Verify Code</button>
                </>
              }
            </div>
          )}
         
        </div>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
};
