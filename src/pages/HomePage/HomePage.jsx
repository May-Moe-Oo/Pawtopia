import React from 'react';
import { Link } from 'react-router-dom';
import HomePgCarousel from '../../components/HomePgCarousel/HomePgCarousel';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-0"></div>
      <div className="z-10">
        <HomePgCarousel />

        <div className="max-w-3xl w-full mx-auto p-8 rounded-md bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-8">A Perfect Pawcation for our Paw Buddies</h1>
                
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Find your pawfect <Link to="/rooms" className="text-secondary">room!</Link></h2>
            <p className="text-gray-600 text-lg">Browse our collection of pet-friendly rooms and find the perfect fit for you and your furry friend.</p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-2">Get in Touch with <Link to="/contactus" className="text-accent">Us!</Link></h2>
            <p className="text-gray-600 text-lg mb-4">If you have any inquiry, feel free to send us your message.</p>
        </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
