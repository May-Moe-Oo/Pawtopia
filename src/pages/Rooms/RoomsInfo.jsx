import React from 'react';
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar/UserNavbar";

function RoomsInfo({user}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [room, setRoom] = useState({});
    
      // fetch a room's information based on a specific id passed as a dependency
    useEffect(() => {
        const fetchRoom = async () => {
        const response = await fetch(`/api/rooms/${id}`); 
        console.log("1. Res = "+ response);
        console.log("2. Room's Data = "+ response.data);
        const roomData = await response.json();
        console.log("3. roomData = "+ roomData);
        setRoom(roomData);
        }; 
        fetchRoom();
    }, [id]);

    if (Object.keys(room).length === 0) {
    return (
      <> <p>No Information Avaliable yet</p> 
      </>
    );
  } else {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <h2>(to delete later)</h2>
            <figure> <img height="20"src={room.roomImageUrl} alt={room.roomName}/> </figure>
            <div className="card-body">
                <h1 className="card-title text-secondary">{room.roomName}</h1> 
                <h2>${room.roomPrice}/night (WIP - to edit later, convert cent to $)</h2> {/* need to convert the price to $ from cent */}
                <br/>
                <h2 className="text-secondary">Room Details:</h2>
                <h2>{room.roomSize}</h2>
                <h2>{room.roomCheckIn}</h2>
                <h2>{room.roomCheckOut}</h2>
                <h2>{room.roomPackageInfo}</h2> 
                <div className="card-actions justify-end">
                     <Link to={`/bookings`}> 
                     <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Book Now</button>
                     </Link>
                </div>
             </div>
        </div><br/>
        
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div> <UserNavbar user={user}/>
        </div>

    );
  }
}
export default RoomsInfo;