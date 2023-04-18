import React from 'react';
import logo from "../../images/logo.png";

function NavBar() {
  return (
    
<div className="navbar bg-base-100" >
  <div className="navbar-start">
    <a className="link-secondary btn btn-ghost normal-case text-xl">Pawtopia</a>
  </div>
  <div className="navbar-center hidden lg:flex tabs">
    <ul className="menu menu-horizontal px-4 py-6">
      <li><a className="link-secondary tab tab-lg tab-lifted mx-4">About Us</a></li>
      <li><a className="link-secondary tab tab-lg tab-lifted mx-4">Rooms</a></li>
      <li><a className="link-secondary tab tab-lg tab-lifted mx-4">Contact Us!</a></li>
    </ul>
  </div>
<div className="navbar-end">
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={logo} alt='Doggies' />
      </div>
    </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {/* to add ternary operator that show only when user login then will show My pet and My booking and Log out pages */}
        <li><a className="justify-between">Account Log In</a></li>
        <li><a className="justify-between">Sign up</a></li>
        <li><a className="justify-between">My Pets</a></li>
        <li><a className="justify-between">My Booking</a></li>
        <li><a className="justify-between">Logout</a></li>
      </ul>
    </div>
</div>
</div>
  );
}

export default NavBar;
