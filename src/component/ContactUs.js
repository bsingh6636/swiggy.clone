import React from "react";
export const ContactUs = () => {
  return (
    <div className="mt--20 flex flex-col items-center justify-center h-screen">
      <h1 className="text-center">FILL UP THE FORM</h1>
      <form className="w-full max-w-md mt-4">
        <input
          placeholder="Subject"
          className="w-full border border-black m-2 p-2"
        ></input>
        <input
          placeholder="Message in brief"
          className="w-full h-40 border border-black m-2 p-2"
        ></input>
        <button className="w-full bg-slate-400 border rounded-lg border-black m-2 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
