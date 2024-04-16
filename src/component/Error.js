import React  from "react";
import { useRouteError } from "react-router-dom";
import { AppLayout } from "../App.js";
export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (

    <div>
      <AppLayout />
      {/* <h4>You got error {(err.data)}</h4>
      <h3>Error Message{(err.error.message)}</h3>
      <h3>Error Status is {(err.status)}</h3> */}
      <h1 className="bg-slate-500">Blunder mistake  , kindly navogate to homepage</h1>
    </div>
  );
};

