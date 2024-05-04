import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white flex flex-wrap justify-between p-5 '>
      <section className='flex-1 p-5 pl-[70px]' aria-label='About'>
        <h2 className="text-2xl font-bold">Brijesh Singh</h2>
        <p className="text-gray-400 text-sm">Swiggy Clone, made up using React</p>
      </section>

      <nav className='flex-1 p-5' aria-label='Contact Us'>
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <ul className='list-none flex gap-3'>
          <li><a href='https://www.linkedin.com/in/bsingh6636/' target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><FaLinkedin /></a></li>
          <li><a href='https://www.facebook.com/bsingh575' target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><FaFacebook /></a></li>
          <li><a href='https://github.com/bsingh6636?tab=repositories' target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><FaGithub /></a></li>
        </ul>
      </nav>

      <section className='flex-1 p-5 pr-[70px]' aria-label='Delivery Locations'>
        <h3 className="text-xl font-semibold">Delivery Locations</h3>
        <ul className='list-none'>
          <li>Bengaluru</li>
          <li>Delhi</li>
          <li>Chennai</li>
          <li>Mumbai</li>
        </ul>
      </section>

      <div className="w-full text-center mt-5 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Brijesh Singh. All rights reserved.
      </div>
    </footer>
  );
};
