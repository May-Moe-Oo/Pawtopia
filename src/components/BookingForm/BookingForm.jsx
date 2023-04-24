import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import Calendar from 'react-calendar'
// import FormCalendar from "./FormCalendar";

function BookingForm({user}) {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]); 
  useEffect(() => {
    const fetchPeting = async (req, res) => {
      const response = await fetch(`/api/bookings/${user._id}/guestPet`);
      console.log("1. Response is "+response);
      const petData = await response.json();
      console.log("2. petData Response is "+ petData);
      setPets(petData);
    };
    fetchPeting();
  }, []);
  console.log("user is " + user);
//! ------------------------------------------------------------------
  const [bookings, setBookings] = useState([]);
  const addRoombookings = (roombooking) => setBookings([roombooking, ...bookings]); // add new room booking 
  const [roomBookingData, SetRoomBookingData] = useState({
    usersName: user._id, 
    roomsName: "", 
    bookingStartDate: Date,
    bookingEndDate: Date,
    petsName: "", 
    remarks: "",
  });
  console.log("Before data is "+ roomBookingData);

  function handleChange(event) {
    event.preventDefault();
    SetRoomBookingData({ ...roomBookingData, 
      [event.target.name]: event.target.value});
    console.log("After chg data is" + roomBookingData);
  }

  const handleNewRoomBooking = async (event) => {
    event.preventDefault()
    const response = await fetch("/api/bookings/bookingForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roomBookingData),
      });
      const roombooking = await response.json();
      addRoombookings(roombooking);
    console.log("New Room Booking has been Made!");
    navigate('/MyBookings'); // MyBookings, show all the booking made by this user
  };

  function handleSubmitBooking(event) {
    event.preventDefault();
    alert(JSON.stringify(roomBookingData));
    console.log("Room Booking was Submitted!");
  };

    return (
        <div>
            <form 
            onSubmit={handleSubmitBooking} 
            >
            <div className="drawer drawer-mobile">
              {/* <figure> <img height="20"src={room.roomImageUrl} alt={room.roomName}/> </figure> */}
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    {/*  Page content here  */}
                    <h1 className="text-3xl font-bold py-2">Room Booking Form</h1> <br/>
                    <div className="form-control w-full max-w-xs">

                    <h1 className="text-xl font-bold" 
                    name="usersName"
                    value={roomBookingData.usersName}>
                      Customer Name: {user.name}
                    </h1>
                    <h1 className="">Customer ID: {user._id}</h1>
                    <br/> 
                    
                    <p>"To insert calander here"</p>
                    
                    <br/> 

                    <span className="label-text">Type of Room </span>
                    <select 
                    name="roomsName"
                    required
                    value={roomBookingData.roomName}
                    onChange={handleChange} 
                    className="select select-error w-full max-w-xs">
                      <option disabled selected> Select room name</option>
                      <option value="644284361fdd74e617c693be">Standard Suite</option>
                      <option value="644284361fdd74e617c693bf">Dreamy Suite</option>
                      <option value="644284361fdd74e617c693c0">Presidential Suite</option>
                    </select>
                    <br/>

                    <span className="label-text">Paw Guest Name</span>
                    <select 
                    name="petsName"
                    required
                    value={roomBookingData.petName}
                    onChange={handleChange} 
                    className="select select-error w-full max-w-xs">
                      <option disabled selected>Select pet staying</option>
                      {pets.map((p) => (
                        <option 
                        value={p._id}>
                          {p.petName}
                        </option>
                      ))}
                    </select>

                    <br/>

                    <label className="label"><span className="label-text">Additional Remarks</span></label>
                    <textarea 
                    placeholder="Remarks"
                    name="remarks"
                    value={roomBookingData.remarks}
                    onChange={handleChange} 
                    className="textarea textarea-error textarea-bordered textarea-lg w-full max-w-xs" />
                    <br/>

                    </div>
                    <br/>
                    <button type="submit" className="btn btn-secondary" onClick={handleNewRoomBooking} >Confirm Booking</button>
                    {/* <button type="submit" className="btn btn-secondary" >Confirm Booking</button> */}
                </div> 
            </div>
          </form>           
        </div>
    );
}

export default BookingForm;