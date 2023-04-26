import React from 'react';
import { Link } from "react-router-dom";
import Daisy from "../../images/Pets/Daisy.jpg"

function AboutUs() {
    return (
        <div className="hero min-h-screen bg-base-200 align-items-start">
            <div className="hero-content flex-col lg:flex-row mb-10">
                <img src={Daisy} alt="Happy" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="m-5 mb-12">
            <h1 className="text-4xl font-bold">To Reciprocate Their Unconditional Love! </h1> <br />
            <h2 className="text-3xl py-2">We Make all our Paw Buddies Happy!</h2> <br/>
            <h2 className="text-3xl py-2">At Pawtopia, we treat every dog as precious baby and our best friend because we know how much they mean to you.</h2> <br/>
            <h2 className="text-3xl py-2">Pawtopia is a place where hooman can have a peace of mind and enjoy their well deserved holiday knowing their buddies are well taken care of and having a blast as well.</h2><br/>
            <h2 className="text-3xl py-2"> <span className="link-accent font-bold"> <Link to={`/contactus`}> Contact Us </Link> </span> to find out more! </h2> <br/>
            </div>
            </div>
        </div>
    );
}

export default AboutUs;
