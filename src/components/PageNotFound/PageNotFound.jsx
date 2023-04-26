import React from 'react';
import { Link } from "react-router-dom";
import dogAtePg from "../../images/dogAtePg.png";


function PageNotFound(props) {
    return (
         <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-6xl font-bold mb-5">Woops...</h1>
                    <h1 className="text-5xl font-bold mb-5">Sorry the page</h1>
                    <h1 className="text-5xl font-bold mb-5">is not here</h1>
                    <h1 className="text-6xl font-bold mb-5">maybe I ate it?</h1>
                    <figure><img className="px-12 mb-20 mt-20" src={dogAtePg} alt="dogAtePg" /></figure>
                    <h1 className="text-3xl font-bold mb-5">Why not you explore the rooms availible?</h1>
                <Link to={`/rooms`}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning">Explore Rooms</button></Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;