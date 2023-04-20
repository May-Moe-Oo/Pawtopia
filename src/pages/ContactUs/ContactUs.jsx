import React from 'react';
import calling from "../../images/Pets/calling.jpg"

function ContactUs() {
    return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
                       <div className="hero-content flex-col lg:flex-row">
                <img src={calling} alt="Calling to make a booking" className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        <div className="max-w-m">
            <h1 className="text-4xl font-bold py-2">If you have any inquiry...</h1>
            <h1 className="text-3xl font-bold py-5">Please give us a call or send an email!</h1>
            <h3 className="text-2xl py-1">1 Pawtopia Road, Singapore 111111</h3>
            <h3 className="text-2xl py-1">Monday To Friday: 7am - 7pm </h3>
            <h3 className="text-2xl py-1">Saturday To Sunday: 9am - 7pm </h3>
            <h3 className="text-2xl py-1">+65 6111 1111 </h3>
            <h3 className="text-2xl py-1">Email: PawtopiaSG@outlook.com</h3>
        </div>
        </div>
    </div>
    );
}

export default ContactUs;