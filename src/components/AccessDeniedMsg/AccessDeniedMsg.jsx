import React from 'react';
import { Link } from "react-router-dom";
import cat from "../../images/cartoon-cat-thief.jpg";
import pinkAccessDenied from "../../images/pinkAccessDenied.jpg";

function AccessDeniedMsg() {
    return (
        <div className="items-center text-center">
            <h3 className="text-center text-4xl font-bold"> Access to this page has been denied.</h3> <br/>
            <h4 className="text-center text-xl font-bold">You do not have the required permission to perform the selected operation!</h4> <br/>
            <div className="card bg-base-100">
              <figure><img className="" src={pinkAccessDenied} alt="User Access Denied" /></figure>
            </div> <br/>
            <div className="flex w-full">
            <div className="grid h-50 flex-grow card bg-base-300 place-items-center">
            <br></br>
            <h3 className="text-center text-2xl py-2"> Registered users kindly please log in.</h3> <br/> <br></br>
            <Link to={`/users/login`}>
            <button className="btn btn-secondary text-2xl">Login</button>
            </Link>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-50 flex-grow card bg-base-300 rounded-box place-items-center ">       
             <h3 className="text-center text-2xl py-2">Non-register customer, </h3>
             <h3 className="text-center text-2xl py-2">consider signing up to enjoy more benefits.</h3> <br/>
             <Link to={`/users/signup`}>
            <button className="btn btn-secondary text-2xl">Create an account</button>
            </Link> 
            {/* <img src={cat} alt='User Access Denied'></img> */}
            </div>
</div> 
        </div>
    );
}

export default AccessDeniedMsg;