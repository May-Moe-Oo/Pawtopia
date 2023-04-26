import React from 'react';
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import Koby from "../../images/Pets/Koby.jpg"
import spring from "../../images/spring.jpg";

// /users/profile
function UserProfile({user, setUser}) {
    return (
        <div>
           <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    {user && 
                    <>
                    <h2 className="text-4xl font-bold py-2 mt-14 mb-5">Welcome {user.name}</h2> <br/>
                    <img src={Koby} alt="Koby" className="h-96 rounded-lg shadow-2xl" />
                    <img src={spring} alt="spring" className="h-96 rounded-lg shadow-2xl mt-10" />
                    </>
                    }
                    <br/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <UserNavbar user={user} />
            </div> 
        </div>
    );
}

export default UserProfile;