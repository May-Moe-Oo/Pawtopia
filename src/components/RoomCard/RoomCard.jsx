import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./roomCard.css"

function RoomCard() {
    //! show the list of room 
    const [rooms, setRooms] = useState([{ _id: "" }]);

    useEffect(() => {
        const fetchRooms = async (req, res) => {
        const response = await fetch("/api/rooms");
        const roomsData = await response.json();
        console.log("Data" + roomsData)
        setRooms(roomsData);
        };
        fetchRooms();
    },[]);

    const [selectedRoom, setSelectedRoom] = useState(null);

    const onclick = (id) => setSelectedRoom(rooms.find((rm)=>rm._id === id));

return (
        <div className="flex align-content: space-around">
            {rooms ? rooms.map((r) => (
                <div key={r._id} className="card card-compact w-full bg-base-100 mx-10">
                    <div onMouseOver={() => onclick(r._id)}>
                        <Link to={`/rooms/${r._id}`}>
                            <figure> 
                                <img src={r.roomImageUrl} alt={r.roomName} className="room-image"/> 
                            </figure>
                            <br/>
                            <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl"> {r.roomName} </h2>
                            </div>
                        </Link>
                    </div>
                </div>
            )) : 
            <div className="flex align-content: space-around">
                <h1>Sorry, No rooms are available at the moment.</h1>
            </div>
            }
        </div>
    );
}

export default RoomCard;

// roomImageUrl, roomName, roomSize, roomPrice, roomCheckIn, roomCheckOut, roomPackageInfo