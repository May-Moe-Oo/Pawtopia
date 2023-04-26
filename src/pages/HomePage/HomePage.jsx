import React from 'react';
import { Link } from "react-router-dom";
import HomePgCarousel from "../../components/HomePgCarousel/HomePgCarousel";
// import HomeBackground from "../../images/HomeBackground.jpg";
// import PinkHomeBackground from "../../images/PinkHomeBackground.jpg";

function HomePage() {

//     const style = {
//     backgroundImage: `url(${PinkHomeBackground})`
//   };

    return (
        <div className="flex flex-col w-full text-center justify-center" 
        // style={style}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="grid place-items-center"><HomePgCarousel /></div>
            <div className="grid h-20 card  rounded-box place-items-center">
                <h1>A Perfect Pawcation for our Paw Buddies </h1>
            </div> 

            <div className="grid h-20 card  place-items-center">
                <h2>Find your pawfect <span className="link-secondary"> <Link to={`/rooms`}>room! </Link> </span> </h2>
            </div>

            <div className="grid h-20 card place-items-center">
                <h2>Get in Touch with <span className="link-accent"> <Link to={`/contactus`}>Us! </Link> </span></h2>
                <h3>If you have any inquiry, feel free to send us your message.</h3>   
            </div>   
                
        </div>
    );
}

export default HomePage;