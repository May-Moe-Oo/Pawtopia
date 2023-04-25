import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { differenceInCalendarDays } from 'date-fns';

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
  const disable = !roomBookingData.petsName;
//! ------------------------------------------------------------------
  function handleChange(event) {
    event.preventDefault();
    SetRoomBookingData({ ...roomBookingData, 
      [event.target.name]: event.target.value});
    console.log("After chg data is" + roomBookingData);
  }
//! ------------------------------------------------------------------
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
//! ------------------------------------------------------------------
  function handleSubmitBooking(event) {
    event.preventDefault();
    alert(JSON.stringify(roomBookingData));
    console.log("Room Booking was Submitted!");
  };
//! ------------------------------------------------------------------
   let numberOfNights = 0;
  if (roomBookingData.bookingStartDate && roomBookingData.bookingEndDate) {
    numberOfNights = differenceInCalendarDays(new Date(roomBookingData.bookingEndDate), new Date(roomBookingData.bookingStartDate));
  }
//! ------------------------------------------------------------------
  return (
      <form onSubmit={handleSubmitBooking} >
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start">
              <h1 className="text-3xl font-bold py-2">Room Booking Form</h1> 
              <br/>
              <div className="form-control w-full max-w-xs">
                <h1 className="text-xl font-bold" 
                    name="usersName"
                    value={roomBookingData.usersName}>
                      Customer Name: {user.name}
                </h1>
                <h1 className="hidden">Customer ID: {user._id}</h1>
                <br/> 
                    {/*  */}
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
                <div >
                  <span className="label-text">Check In date </span>
                  <input 
                    type="date" 
                    name="bookingStartDate"
                    value={roomBookingData.bookingStartDate}
                    required
                    onChange={handleChange} 
                    className="border my-4 p-2 p-x rounded-2xl w-full max-w-xs"/>
                </div>

                <div >
                  <span className="label-text">Check Out date </span>
                  <input 
                    type="date" 
                    name="bookingEndDate"
                    value={roomBookingData.bookingEndDate}
                    required
                    onChange={handleChange} 
                    className="border my-2 p-2 p-x rounded-2xl w-full max-w-xs"/>
                </div>
                    <br/>
                <div>
                  <p>Numbers of nights selected: 
                    {numberOfNights > 0 && (
                    <span> {numberOfNights} nights</span>
                    )}
                  </p>
                  <br/>
 
                  {numberOfNights > 0 && (
                  <div>
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
                  )}
                </div>
              </div>
              <br/>
              <p>terms and conditions (WIP)</p>
              <br/>
              <button type="submit" className="btn btn-secondary" disabled={disable} onClick={handleNewRoomBooking} >Confirm Booking</button>
            </div> 

          </div>
          {/* <>CSS to fix - the big box</> */}
      </form>           
  )
}

export default BookingForm;