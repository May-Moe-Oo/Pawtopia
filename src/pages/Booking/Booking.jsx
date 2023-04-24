import React from 'react';
import { Link } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import BookingTable from "../../components/BookingTable/BookingTable";

function Booking({user}) {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    {/*  Page content here  */}
                    <h1 className="font-bold">{user.name}'s List of room bookings</h1>
                    <br />
                    <BookingTable user={user}/>
                    <br />
                    <Link to={`/rooms`}><button className="btn btn-outline btn-secondary my-5">Click to find your pawfect Room</button></Link>
                    <br/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <UserNavbar user={user}/>
            </div> 
        </div>
    );
}

export default Booking;