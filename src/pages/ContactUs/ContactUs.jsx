import React from 'react';
import callingImage from '../../images/Pets/calling.jpg';

function ContactUs() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={callingImage}
          alt="Person calling to make a booking"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="max-w-m">
          <h1 className="text-4xl font-bold py-2">
            Have a question or want to book a service?
          </h1>
          <h2 className="text-3xl font-bold py-5">
            Contact us by phone or email!
          </h2>
          <p className="text-2xl py-1">1 Pawtopia Road, Singapore 111111</p>
          <p className="text-2xl py-1">Monday to Friday: 7am - 7pm</p>
          <p className="text-2xl py-1">Saturday to Sunday: 9am - 7pm</p>
          <p className="text-2xl py-1">+65 6111 1111</p>
          <p className="text-2xl py-1">Email: PawtopiaSG@outlook.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
