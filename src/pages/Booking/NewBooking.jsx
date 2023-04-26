import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingForm from '../../components/BookingForm/BookingForm';

function NewBooking({user}) {
      const { id } = useParams();
const [selectedRoom, setSelectedRoom] = useState([]); 

  useEffect(() => {
    const fetchingRoom = async (req, res) => {
      const response = await fetch(`/api/bookings/rooms/${id}`);
      const selectedRoomData = await response.json();
    //   console.log("The selectedRoomData Response is "+ JSON.stringify(selectedRoomData));
      setSelectedRoom(selectedRoomData);
    };
    fetchingRoom();
  }, []);

    return (
        <div className="text-center justify-center bg-base-100 align-items-start">
            <h1 className='text-5xl font-bold py-2 my-8'>Reserve The Pawfect Room for your Buddy!</h1>
            <h1 className="text-4xl font-bold py-2 my-5">Room Reservation Form</h1> 
            <figure className='grid place-items-center my-2'> <img className="w-96 rounded" src={selectedRoom.roomImageUrl} alt={selectedRoom.roomName}/> </figure>
            <BookingForm user={user} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom}/>           
        </div>
    );
}

export default NewBooking;