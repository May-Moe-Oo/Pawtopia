import React from 'react';
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getToken, getUser } from "../../utilities/users-service";
import './App.css'
import HomePage from "../HomePage/HomePage";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import SignUpForm from "../AuthPage/SignUpForm";
import LoginForm from "../AuthPage/LoginForm";
import LogOutMsg from "../AuthPage/LogOutMsg";
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
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/users/signup" element={<SignUpForm setUser={setUser} />} />
        <Route path="/users/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/users/logout" element={<LogOutMsg />} />
        {/* <Route path="/Pets/new" element={user && user.userRole == "customer" ? <Pets user={user} /> : <AccessDeniedMsg />} />  */}
      </Routes>
      </div>
    </div>

  )
}

export default App
