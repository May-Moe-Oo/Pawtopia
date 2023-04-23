import React from 'react';
import { Link } from "react-router-dom";
import spendingTime from "../../images/spendingTime.jpg";

function LogOutMsg() {
    return (
        <div className="hero min-h-screen bg-base-100 align-items-start">
            {/* <img src={spendingTime} alt='Spending Time with Pets'/> */}
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold">You have successfully Logout</h1>
                    <h2 className="mb-5 text-2xl py-2">Thank you for visiting Pawtopia</h2>
                    <Link to={`/users/login`}> 
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg my-3">Back to Log in
                </button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogOutMsg;

