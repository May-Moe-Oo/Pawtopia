import React from 'react';
import { useEffect, useState } from "react";
// import "./BookingTable.css";

function BookingTable({user}) {
    //! show the list of room 
    const [bookings, setBookings] = useState([{ _id: "" }]);
    console.log("1. MyBooking" + bookings);

    useEffect(() => {
        const fetchBookings = async (req, res) => {
        const response = await fetch(`/api/bookings/${user._id}/MyBookings`);
        const bookingsData = await response.json();
        console.log("user's pet booking Data" + bookingsData)

        //  format date data 
        bookingsData.forEach(booking =>{
            const date = new Date(booking.bookingStartDate);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            booking.bookingStartDate = formattedDate; 
        })
        
        bookingsData.forEach(booking =>{
            const date = new Date(booking.bookingEndDate);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            booking.bookingEndDate = formattedDate; 
        })
        setBookings(bookingsData);
        };
        fetchBookings();
    },[]);


    return (
        <div className="flex justify-content-center overflow-x-auto w-full">
            <table className="table table-compact">
                {/* header row */}
                <thead>
                <tr>
                    <th className="text-xl font-bold">Pet Name</th>
                    <th className="text-xl font-bold">Room Name</th>
                    <th className="text-xl font-bold">From (date)</th>
                    <th className="text-xl font-bold">To (date)</th>
                    <th className="text-xl font-bold">Remarks</th>
                </tr>
                </thead>
                <tbody>
                {/* booking content row to map out the booking */}
                {bookings ? bookings.map((roomBooked) => (
                <tr>
                    <td>
                    <div className="flex items-center space-x-3">
                       <div className="avatar">
              <div className="mask mask-squircle w-20 h-14">
                <img src={roomBooked.petsName?.petImageUrl} alt={roomBooked.petsName?.petName} />
              </div>
            </div> 
                        <div className="text-xl font-bold">{roomBooked.petsName?.petName}</div>
                    </div>
                    </td>
                    <td className="text-xl"> {roomBooked.roomsName?.roomName} </td>
                    <td className="text-xl"> {roomBooked.bookingStartDate} </td>
                    <td className="text-xl"> {roomBooked.bookingEndDate} </td>
                    <td className="text-xl"> {roomBooked.remarks} </td>
                    </tr>
                )): 
                 <tr> <td> No Records found </td> </tr>
                }
                </tbody>
            </table>

        </div>
    );
}

export default BookingTable;