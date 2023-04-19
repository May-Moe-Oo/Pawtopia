import React from 'react';
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getToken, getUser } from "../../utilities/users-service";
import './App.css'
import HomePage from "../HomePage/HomePage";
import AboutUs from "../AboutUs/About";
import ContactUs from "../ContactUs/ContactUs";
import SignUpForm from "../AuthPage/SignUpForm";
import LoginForm from "../AuthPage/LoginForm";
import LogOutMsg from "../AuthPage/LogOutMsg";
import Rooms from "../Rooms/RoomsAvil";
import Booking from "../Booking/Booking";
import Pets from "../Pets/Pets"
import AccessDeniedMsg from "../../components/AccessDeniedMsg/AccessDeniedMsg";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

function App() {
  const [user, setUser] = useState(getUser());

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
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking" element={<Booking user={user} />} />
        {/* <Route path="/booking" element={user && user.userRole == "user" ? <Booking user={user} /> : <AccessDeniedMsg />} />  */}
        <Route path="/pets" element={<Pets user={user} />} />
        {/* <Route path="/Pets" element={user && user.userRole == "user" ? <Pets user={user} /> : <AccessDeniedMsg />} />  */}
      </Routes>
      </div>
    </div>

  )
}

export default App
