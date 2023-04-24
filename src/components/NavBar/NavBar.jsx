import React from 'react';
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { logout } from "../../utilities/users-service";

function NavBar({user, setUser}) {
  //User's Logout 
  const handleLogout = async (user) => {
    logout();
    setUser(null);
    console.log("User has been logged out successfully.");
  };
  return (
    
<div className="navbar bg-base-100" >
  <div className="navbar-start">
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li><Link to={`/aboutus`} className="link-secondary tab tab-lg tab-lifted mx-4">About Us</Link></li>
        <li><Link to={`/rooms`} className="link-secondary tab tab-lg tab-lifted mx-4">Rooms</Link></li>
        <li><Link to={`/contactus`} className="link-secondary tab tab-lg tab-lifted mx-4" >Contact Us!</Link></li>
      </ul>
    </div>
    <Link to={`/`} className="link-secondary btn btn-ghost normal-case text-xl">Pawtopia</Link>
  </div>
  <div className="navbar-center hidden lg:flex tabs">
    <ul className="menu menu-horizontal px-4 py-6">
      <li><Link to={`/aboutus`} className="link-secondary tab tab-lg tab-lifted mx-4">About Us</Link></li>
      <li><Link to={`/rooms`} className="link-secondary tab tab-lg tab-lifted mx-4">Rooms</Link></li>
      <li><Link to={`/contactus`} className="link-secondary tab tab-lg tab-lifted mx-4" >Contact Us!</Link></li>
    </ul>
  </div>
<div className="navbar-end">
  {user ? (
    <div className=" mx-4 ">  
      <Link to={`/users/logout`} onClick={handleLogout}>
        <button className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg px-2">Log Out</button>
        </Link>
    </div>
  ) : (null)}  {/* only display when user login */}
    
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-20 rounded-full">
        <img src={logo} alt='Doggies' />
      </div>
    </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        {!user ? ( <>
        <li><Link to={`/users/login`} className="justify-between">Log In</Link></li>
        <li><Link to={`/users/signup`} className="justify-between">Sign up</Link></li>
        </> ) : (null)}

        {user ? ( <>
        <li><Link to={`/users/profile`} className="justify-between">My Profile</Link></li>
        <li><Link to={`/pets`} className="justify-between">My Pets</Link></li>
        <li><Link to={`/MyBookings`}  className="justify-between">My Booking</Link></li>
        </> ) : (null)}
        {/* to add ternary operator that show only when user login then will show My Profile, My pet and My booking and Log out pages */}
      </ul>
    </div>
</div>
</div>
  );
}

export default NavBar;
