import React, { useState } from "react";
import Map from "../smallComponents/Map";

export const ContactUs = () => {
  const [form, setForm] = useState({ subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="mt-20 flex flex-col flex-grow items-center justify-center bg-gray-100">
      <h1 className="text-center text-4xl font-bold font-roboto mb-8">FILL UP THE FORM</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-4 bg-white p-8 rounded-lg shadow-md">
        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 font-roboto"
        />
        <textarea
          name="message"
          placeholder="Message in brief"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4 rounded-lg h-40 focus:outline-none focus:border-blue-500 text-gray-700 font-roboto"
        />
        <button type="submit" className={`w-full ${loading ? 'bg-blue-600' : 'bg-blue-500'} text-white p-2 rounded-lg hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50' : ''}`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {success && <p className="text-green-500 mt-4">Your message has been submitted successfully!</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="mt-8 flex flex-row">
        <div className="p-10 mr-17">
          <h2 className="text-center text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-center mb-4">Email: bsingh6636@outlook.com</p>
          <p className="text-center mb-4">Phone: +91 8050578803</p>
          <p className="text-center mb-4">Address: Kannuru, Bengaluru, Bellahalli, Karnataka 560064</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>

        <div className="p-10 ml-17">
          <h2 className="text-center text-2xl font-semibold mb-2">Our Location</h2>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
