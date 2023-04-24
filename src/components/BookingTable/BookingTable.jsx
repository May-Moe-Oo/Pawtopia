import React from 'react';
import { Link } from "react-router-dom";
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
        setBookings(bookingsData);
        };
        fetchBookings();
    },[]);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* header row */}
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
                        {/* <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="{roomBooked.petsName.petImageUrl}" alt="{roomBooked.petsName}" />
                        </div>
                        </div> */}
                        <div>
                        <div className="font-bold">{roomBooked.petsName}</div>
                        </div>
                    </div>
                    </td>
                    <td> {roomBooked.roomsName} </td>
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