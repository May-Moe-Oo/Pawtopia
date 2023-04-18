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
  // const UserLogout = () => (
  //   <div>
  //     {user ? ( <>
  //         <Link to={`/users/logout`}>
  //         <button onClick={handleLogout}>Log Out</button>
  //         </Link>
  //       </>) : null }
  //   </div>
  // );

  return (
    
<div className="navbar bg-base-100" >
  <div className="navbar-start">
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
    <div>
      <Link to={`/users/logout`} className="link-secondary tab tab-lg tab-lifted mx-4" onClick={handleLogout}>Log Out</Link>
      {/* only display when user login */}
    </div>
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={logo} alt='Doggies' />
      </div>
    </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {/* to add ternary operator that show only when user login then will show My pet and My booking and Log out pages */}
        <li><Link to={`/users/login`} className="justify-between">Account Log In</Link></li>
        <li><Link to={`/users/signup`} className="justify-between">Sign up</Link></li>
        <li><Link to={`/pets`} className="justify-between">My Pets</Link></li>
        <li><Link to={`/booking`}  className="justify-between">My Booking</Link></li>
      </ul>
    </div>
</div>
</div>
  );
}

export default NavBar;
