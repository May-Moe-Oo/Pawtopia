import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getToken , getUser} from "../../utilities/users-service";

function LoginForm({setUser}) {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      
      if (data.token) {
        localStorage.setItem("token", data.token);
        setUser(getUser())
        setError("");
        // window.alert("Account has login successfully."); 
        console.log("Login successfully.");
        console.log(JSON.stringify(data));
        navigate('/users/profile');
       } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

    return (
        <form onSubmit={handleLogin} >
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10">Login now!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label label-text text-xl text-gray-700 font-bold mb-2"> Email </label>
                            <input 
                            type="email" 
                            name="email"
                            required
                            placeholder="Enter your email address..." 
                            className="input input-bordered" />
                        </div>
                        
                        <div className="form-control">
                            <label className="label label-text text-xl text-gray-700 font-bold mb-2"> Password </label>
                            <input 
                            type="password"
                            name="password"             
                            required
                            placeholder="Enter your password..." 
                            className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                    <p className="py-5 px-5"> If you have a registered account, kindly sign in using your email address. 
                    <br></br> New Customers, please <span className="link-secondary"> 
                    <Link to={`/users/signup`}> create </Link> </span> an account. 
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
};

export default LoginForm;