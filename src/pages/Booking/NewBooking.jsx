import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingForm from '../../components/BookingForm/BookingForm';

function NewBooking({user}) {
      const { id } = useParams();
const [selectedRoom, setSelectedRoom] = useState([]); 

  useEffect(() => {
    const fetchingRoom = async (req, res) => {
      const response = await fetch(`/api/bookings/rooms/${id}`);
      // console.log("1. Response is "+response);
      const selectedRoomData = await response.json();
    //   console.log("The selectedRoomData Response is "+ JSON.stringify(selectedRoomData));
      setSelectedRoom(selectedRoomData);
    };
    fetchingRoom();
  }, []);
//   console.log("The selectedRoom is "+ JSON.stringify(selectedRoom));

    return (
        <div className="text-center justify-center bg-base-100 align-items-start">
            <h1 className='text-4xl font-bold py-2 my-8'>Reserve The Pawfect Pawcation Room for your Buddy!</h1>
            <h1 className="text-3xl font-bold py-2 my-5">Room Reservation Form</h1> 
            <figure className='grid place-items-center my-2'> <img className="w-96 rounded" src={selectedRoom.roomImageUrl} alt={selectedRoom.roomName}/> </figure>
            <BookingForm user={user} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom}/>
              <br/>
            {/* <div className="">{user ? ( <BookingForm user={user} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom}/> ) : (null)}</div> */}
            
        </div>
    );
}

export default NewBooking;