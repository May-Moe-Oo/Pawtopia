import React from 'react';
import { Link } from "react-router-dom";

function AboutUS() {
    return (
        <div>
            <h1 data-theme="cupcake">A Perfect Pawcation for our Paw Buddies </h1>
            <h2>Find your pawfect room</h2> {/* room should be link to room page */}
            <h2>Get in Touch with Us! </h2> {/* Us should be link to contact us page */}
            <h2>If you have any inquiry, feel free to send us your message.</h2> 
        </div>
    );
}

export default AboutUS;
