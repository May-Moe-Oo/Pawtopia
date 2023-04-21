import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function RoomsAvil(props) {
    return (
        <div className="justify-center">
            <h1>List of Room available</h1>
            <h1>Our rooms are designed to ensure your Paw Buddies feel just like they're at home.</h1>
            <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img src="" alt="Premium Suite" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">Premium Suite</h2>
            </div>
            </div>
            <br/>
            <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img src="" alt="Twin Duplex" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">Twin Duplex</h2>
            </div>
            </div>
            <br/>
            <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img src="" alt="Triplets Party" /></figure>
            <div className="card-body ">
                <h2 className="card-title justify-center">Triplets Party</h2>
            </div>
            </div>
        </div>
    );
}

export default RoomsAvil;