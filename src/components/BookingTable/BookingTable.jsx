import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BookingTable({user}) {
    //! show the list of room 
    const [bookings, setBookings] = useState([{ _id: "" }]);
        useEffect(() => {
        const fetchBookings = async (req, res) => {
        const response = await fetch("/api/bookings");
        const bookingsData = await response.json();
        console.log("Data" + bookingsData)
        setRooms(bookingsData);
        };
        fetchBookings();
    },[]);

    return (
        <div className="overflow-x-auto w-full">

            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th>Pet Name</th>
                    <th>Room Name</th>
                    <th>From (date)</th>
                    <th>To (date)</th>
                </tr>
                </thead>
                <tbody>
                {/* row */}
                <tr>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="{x.petImageUrl}" alt="{x.petName}" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">x.petName</div>
                        </div>
                    </div>
                    </td>
                    <td> x.roomName </td>
                    <td> x.bookingStartDate </td>
                    <td> x.bookingEndDate </td>
                    <th>
                    {/* <button className="btn btn-ghost btn-xs">details</button> */}
                    </th>
                </tr>
                </tbody>
            </table>

            <div>
                <h1>Sorry, No rooms has been booked at the moment </h1>
            </div>

        </div>
    );
}

export default BookingTable;