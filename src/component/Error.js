import React  from "react";
import { Link, useRouteError } from "react-router-dom";
import { AppLayout } from "../App.js";
export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (

    <div className={` 'bg-gray-100 text-gray-800'} min-h-screen flex flex-col items-center justify-center rounded-3xl`}>
    <div className="text-center space-y-6 px-4">
      <h1 className="text-9xl font-bold mb-6 animate-bounce">404</h1>
      <p className="text-4xl mb-10">Page Not Found</p>
      <Link to="/" className={`inline-block px-6 py-3 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-90  'bg-white text-gray-800'}`} style={{ cursor: 'pointer' }}>
        Go to Home
      </Link>
    </div>
  </div>
  );
};

