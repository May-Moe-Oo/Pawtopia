import React from 'react';
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import { getToken, getUser } from "../../utilities/users-service";
import './App.css'
import HomePage from "../HomePage/HomePage";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import SignUpForm from "../AuthPage/SignUpForm";
import LoginForm from "../AuthPage/LoginForm";
import LogOutMsg from "../AuthPage/LogOutMsg";
import UserProfile from "../AuthPage/UserProfile";
import Rooms from "../Rooms/RoomsAvil";
import RoomsInfo from "../Rooms/RoomsInfo";
import NewBooking from "../Booking/NewBooking";
import Booking from "../Booking/Booking";
import Pets from "../Pets/Pets"
import PetsCreateForm from "../Pets/PetsCreateForm";
import PetsEditForm from "../Pets/PetsEditForm";
import PetInfo from "../Pets/PetsInfo";
import AccessDeniedMsg from "../../components/AccessDeniedMsg/AccessDeniedMsg";
import PageNotFound from "../../components/PageNotFound/PageNotFound";


function App() {
  const [user, setUser] = useState(getUser());
  console.log("user: " + user);
  console.log("setUser: " + setUser);
  return (
      <div className='App'>
      <div className='NavBar'>
      <NavBar user={user} setUser={setUser} />
      </div>
      <div className='Routes'>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/users/signup" element={<SignUpForm setUser={setUser} />} />
        <Route path="/users/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/users/logout" element={<LogOutMsg />} />
        <Route path="/users/profile" element={user ? <UserProfile user={user}/>: <AccessDeniedMsg />} /> 
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomsInfo user={user} />} />
        
        <Route path="/bookings/bookingForm" element={user ? <NewBooking user={user} /> : <AccessDeniedMsg />} /> 
        {/* <Route path="/bookings/bookingForm" element={<NewBooking user={user} />} />   */} 
        {/* to replace later */}
        
        <Route path="/MyBookings" element={user ? <Booking user={user} /> : <AccessDeniedMsg />} /> 
        <Route path="/pets" element={user ? <Pets user={user} setUser={setUser}/> : <AccessDeniedMsg />} />
        <Route path="/pets/new" element={user ? <PetsCreateForm user={user} setUser={setUser}/> : <AccessDeniedMsg />} />
        <Route path="/pets/:id/edit" element={user ? <PetsEditForm user={user} setUser={setUser}/> : <AccessDeniedMsg />} />
        {/* <Route path="/pets/petID/:id" element={user ? <PetInfo user={user} setUser={setUser}/> : <AccessDeniedMsg />} /> */}
        <Route path="/pets/user/:id" element={user ? <PetInfo user={user} setUser={setUser}/> : <AccessDeniedMsg />} />
      </Routes>
      </div>
    </div>

  )
}

export default App
