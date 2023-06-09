import React from 'react';
import { Link } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import BookingTable from "../../components/BookingTable/BookingTable";

function MyBookings({user}) {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    <h1 className="py-2 mb-8 text-3xl font-bold">{user.name}'s Room Booking Reservations</h1>
                    <BookingTable user={user}/>
                    <Link to={`/rooms`}><button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg my-5">Click to find your pawfect Room</button></Link>
                    <Link to={`/bookings/TermsAndConditions`} className="link link-info py-2 text-xl font-bold">Terms And Conditions</Link>
              <br/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <UserNavbar user={user}/>
            </div> 
        </div>
    );
}

export default MyBookings;