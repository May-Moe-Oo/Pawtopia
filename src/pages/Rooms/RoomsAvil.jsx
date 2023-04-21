import React from 'react';
import RoomCard from '../../components/RoomCard/RoomCard';
import UserNavbar from '../../components/UserNavbar/UserNavbar';

function RoomsAvil({user}) {
    return (
        <div className="justify-center">
            <h1>List of Room available</h1>
            <h1>Our rooms are designed to ensure your Paw Buddies feel just like they're at home.</h1>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    <RoomCard/>
                    <br/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <br/>
                <UserNavbar user={user}/>
            </div>  
        </div>
    );
}

export default RoomsAvil;