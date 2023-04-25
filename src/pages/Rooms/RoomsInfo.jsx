import React from 'react';
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
// import UserNavbar from "../../components/UserNavbar/UserNavbar";

function RoomsInfo({user, room, setRoom}) {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    // const [room, setRoom] = useState({});
    console.log("1. room: " + room)
      // fetch a room's information 
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
  
  // const navigateBookingForm = () => {
  //   navigate("/bookings/bookingForm", {
  //     state: { room, setRoom },
  //   });
  // };
  
    console.log("2. room: " + room)
    console.log("2. setRoom: " + setRoom)
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
          {/* <h1 className="card-title text-secondary">{room.roomName}</h1>  */}
          <br/>

          <div className="card lg:card-side bg-base-100 shadow-xl">
            
            <figure> <img height="20"src={room.roomImageUrl} alt={room.roomName}/> </figure>
            <div className="card-body">
                <h1 className="card-title text-secondary text-6xl font-bold">{room.roomName}</h1> 
                <h2 className="text-xl mt-5">{(room.roomPrice / 100).toLocaleString("en-US", {style: "currency", currency: "SGD",})} / Night </h2>                 
                <br/>
                <h2 className="text-secondary text-2xl font-bold">Room Details:</h2>
                <h2 className='text-xl'>{room.roomSize}</h2>
                <h2 className='text-xl'>{room.roomCheckIn}</h2>
                <h2 className='text-xl'>{room.roomCheckOut}</h2>
                <h2 className='text-xl'>{room.roomPackageInfo}</h2> 
                <br/>

                <div className="card-actions justify-start"> 
                     <Link to={`/bookings/bookingForm`}> 
                     <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg " >Book Now </button>
                     </Link>
                     {/* <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={navigateBookingForm}>Book Now </button> */}
                </div>
                <br/>

                <h1>If you have any inquiry, feel free to<span className="link-info"><Link to={`/contactus`}> contact us</Link></span>.</h1>
             </div>
          </div>
          <br/>
          
          <p>add more photo here</p>
          <p>add more info here</p>
        </div> 
        </div>
    );
  }
}
export default RoomsInfo;