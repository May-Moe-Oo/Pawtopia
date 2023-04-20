import React from 'react';
import { Link } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar/UserNavbar";

function Booking({user}) {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    {/*  Page content here  */}
                    {user && <h2>Welcome {user.name}</h2>}
                    <h1>List of book rooms</h1>
                    <br />
                    <p>No record of rooms booked can be found</p>
                    <button className="btn btn-outline btn-secondary">Click to find your pawfect Room</button>
                    <br />
                    <p>to insert Booked Room table here</p>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <UserNavbar />
            </div> 
        </div>
    );
}

export default Booking;