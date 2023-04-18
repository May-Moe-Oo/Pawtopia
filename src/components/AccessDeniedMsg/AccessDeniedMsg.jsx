import React from 'react';
import cat from "../../images/cartoon-cat-thief.jpg";

function AccessDeniedMsg() {
    return (
        <div className="AccessDeniedMsg">
            <h3> Access denied. Please log in as an Admin. 
            <link to={`/users/login`}>
            <button>Login</button>
            </link>
            {/* or */}
            <a className="link link-secondary">  <button>Login</button> </a>
          </h3>
            <img src={cat} alt='User Access Denied'></img>
        </div>
    );
}

export default AccessDeniedMsg;