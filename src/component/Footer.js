import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-slate-950 text-white flex flex-wrap justify-between p-5'>
      <section className='flex-1 p-5 pl-[70px]' aria-label='About'>
        <h2>Brijesh Singh</h2>
        <p className="text-gray-400 text-sm">Your tagline or brief description here</p>
      </section>

      <nav className='flex-1 p-5' aria-label='Contact Us'>
        <h3>Contact Us</h3>
        <ul className='list-none'>
          <li><a href='https://www.linkedin.com/in/bsingh6636/' className="text-white hover:text-gray-300">LinkedIn</a></li>
          <li><a href='https://www.facebook.com/bsingh575' className="text-white hover:text-gray-300">Facebook</a></li>
          <li><a href='https://github.com/bsingh6636?tab=repositories' className="text-white hover:text-gray-300">Github</a></li>
        </ul>
      </nav>

      <section className='flex-1 p-5 pr-[70px]' aria-label='Delivery Locations'>
        <h3>Delivery Locations</h3>
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
