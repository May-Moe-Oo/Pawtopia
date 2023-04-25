import React from 'react';
import { useEffect, useState } from "react";

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
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* header row */}
                {/* {JSON.stringify(bookings[0])} {JSON.stringify(bookings[1])} */}
                {/* {JSON.stringify(bookings[0].bookingStartDate)} and 
                {JSON.stringify(bookings[0].bookingEndDate)} */}
                <thead>
                <tr>
                    <th>Pet Name</th>
                    <th>Room Name</th>
                    <th>From (date)</th>
                    <th>To (date)</th>
                    <th>Remarks</th>
                </tr>
                </thead>
                <tbody>
                {/* booking content row to map out the booking */}
                {bookings ? bookings.map((roomBooked) => (
                <tr>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="font-bold">{roomBooked.petsName?.petName}</div>
                    </div>
                    </td>
                    <td> {roomBooked.roomsName?.roomName} </td>
                    <td> {roomBooked.bookingStartDate} </td>
                    <td> {roomBooked.bookingEndDate} </td>
                    <td> {roomBooked.remarks} </td>
                    <th>
                    {/* <button className="btn btn-ghost btn-xs">details</button> */}
                    </th>
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