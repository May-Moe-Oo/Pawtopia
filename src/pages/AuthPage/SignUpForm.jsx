import React from 'react';
import { useState } from "react";
import { getUser, signUp } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import PhoneInput from 'react-phone-number-input'

function SignUpForm({ setUser }) {
  const navigate = useNavigate();
   const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    userRole: "user",
    phoneNum: "",
  });
  const [error, setError] = useState("");
  const disable = state.password !== state.confirm;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.password.length < 5) {
    setError("Password must be at least 5 characters or numbers long.");
    return;
    }

    // window.alert(state.email + " Account has been created successfully. Please Login.");
    
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => console.log( data ));
      console.log("Sign up is submitted");
      navigate('/users/login');
  };

  const handleChange = (event) => {
    setState({
      ...state, 
      [event.target.name]: event.target.value, userRole:"user"
    });
    console.log(state);
  };

    return (
      <form onSubmit={handleSubmit} className="card w-full max-w-xl bg-base-100 shadow-xl mx-20">
        <div className="w-full max-w-xl shadow-2xl bg-base-100">
        <div className="hero-content flex-col lg:flex">
            <h1 className="card-title text-4xl font-bold text-gray-1000 mb-5">Register New Account</h1>
            {error}
            
            <div className="form-control w-full max-w-xs">
              <label className="label label-text text-xl text-gray-700 font-bold mb-2"> User Name: </label>
              <input 
              type="text" 
              name="name" 
              value={state.name} 
              onChange={handleChange} 
              required
              placeholder="Please enter Username..." 
              className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label label-text text-xl text-gray-700 font-bold mb-2"> Email Address: </label>
              <input 
              type="email" 
              name="email" 
              value={state.email} 
              onChange={handleChange} 
              required
              placeholder="Please insert your email address..." 
              className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label label-text text-xl text-gray-700 font-bold mb-2"> Password: </label>
              <input 
              type="password" 
              name="password" 
              value={state.password} 
              onChange={handleChange} 
              required
              placeholder="Password of min of 5 characters..." 
              className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label label-text text-xl text-gray-700 font-bold mb-2"> Confirm Password: </label>
              <input 
              type="password" 
              name="confirm" 
              value={state.confirm} 
              onChange={handleChange} 
              required
              placeholder="Ensure is the same as above password..." 
              className="input input-bordered w-full max-w-xs" />
            </div>
            
            {/* <div className="form-control w-full max-w-xs">
              <label className="label label-text text-xl text-gray-700 font-bold mb-2"> Phone Number: </label>
              <PhoneInput 
              type="number" 
              name="Phone Number" 
              defaultCountry="SG" 
              value={state.phoneNum} 
              onChange={handleChange} 
              required
              placeholder="Please enter your mobile number..." 
              className="input input-bordered w-full max-w-xs" />
            </div> */}

            <div className="form-control mt-6">
                <button 
                type="submit" disabled={disable}
                className="btn btn-secondary">Sign Up</button>
                <p className="error-message">&nbsp;{state.error}</p>
            </div>

            <div className="text-center lg:text-left">
              <p className="py-5 px-5"> If you have a registered account, kindly <span className="link-secondary"> <Link to={`/users/login`}> Sign in </Link> </span>  using your email address. 
              {/* create is a clickable link that lead to login page  */}
              </p>
            </div>

        </div></div>
      </form>
    );
}

export default SignUpForm;