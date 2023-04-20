import React from 'react';
import { Link } from "react-router-dom";

function UserNavbar() {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-5 w-50 bg-base-100 text-base-content">
                <li><Link to={`/users/profile`} className="justify-between my-3">My Profile</Link></li>
                <li><Link to={`/users/pets`} className="justify-between my-3">My Pets Info</Link></li>
                <li><Link to={`/booking`} className="justify-between my-3">My Booking</Link></li>
            </ul>
        </div>
    );
}

export default UserNavbar;