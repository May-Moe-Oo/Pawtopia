import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { differenceInCalendarDays, isToday } from 'date-fns';

function BookingForm({user, selectedRoom, setSelectedRoom}) {
  const navigate = useNavigate();
  const { id } = useParams();
//! ------------------------------------------------------------------
  const [pets, setPets] = useState([]); 
  useEffect(() => {
    const fetchingPet = async (req, res) => {
      const response = await fetch(`/api/bookings/${user._id}/guestPet`);
      const petData = await response.json();
      setPets(petData);
    };
    fetchingPet();
  }, []);
//! ------------------------------------------------------------------
// const [selectedRoom, setSelectedRoom] = useState([]); 

//   useEffect(() => {
//     const fetchingRoom = async (req, res) => {
//       const response = await fetch(`/api/bookings/rooms/${id}`);
//       // console.log("1. Response is "+response);
//       const selectedRoomData = await response.json();
//       // console.log("The selectedRoomData Response is "+ JSON.stringify(selectedRoomData));
//       setSelectedRoom(selectedRoomData);
//     };
//     fetchingRoom();
//   }, []);
  // console.log("The selectedRoom is "+ JSON.stringify(selectedRoom));
// ! ------------------------------------------------------------------
  const [bookings, setBookings] = useState([]);
  const addRoombookings = (roombooking) => setBookings([roombooking, ...bookings]); // add new room booking 
  const [roomBookingData, SetRoomBookingData] = useState({
    usersName: user._id, 
    roomsName: id, 
    bookingStartDate: Date,
    bookingEndDate: Date,
    petsName: "", 
    remarks: "",
  });
  const disable = !roomBookingData.petsName;
//! ------------------------------------------------------------------
  function handleChange(event) {
    event.preventDefault();
    SetRoomBookingData({ ...roomBookingData, 
      [event.target.name]: event.target.value});
    console.log("After chg data is" + JSON.stringify(roomBookingData));
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
    const TotalPrice = (selectedRoom.roomPrice * numberOfNights)/100;
//! ------------------------------------------------------------------


  return (
      <form onSubmit={handleSubmitBooking} >
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start">
              <div className="form-control w-full max-w-xs">
                <h1 className="text-xl" required >
                    Selected Room: 
                    <span className="text-xl font-bold py-2"> {selectedRoom.roomName}</span>
                </h1> 
                <h1 name="roomsName" className="hidden">Room ID: {selectedRoom._id}</h1>
                {/* <h1> Check In - {selectedRoom.roomCheckIn}</h1>
                <h1> Check Out - {selectedRoom.roomCheckOut}</h1> */}
                <br/>
                <h1 className="text-xl font-bold">Customer Name: {user.name}</h1>
                <h1 className="hidden">Customer ID: {user._id}</h1>
                <br/> 
                <div >
                  <span className="label-text">Check In date </span>
                  <input 
                    type="date" 
                    name="bookingStartDate"
                    min={new Date().toISOString().substr(0, 10)}
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
                    min={new Date().toISOString().substr(0, 10)}
                    value={roomBookingData.bookingEndDate}
                    required
                    onChange={handleChange}
                    className="border my-2 p-2 p-x rounded-2xl w-full max-w-xs"/>
                </div>

                <div>
                    {numberOfNights === 0 && (
                    <>
                      <p>*Error <span> {numberOfNights} night selected</span></p>
                      <p>A min of 1 night is required.</p>
                    </>
                    )}

                  {numberOfNights > 0 && (
                  <p className="my-3">Numbers of nights selected: <span> {numberOfNights} nights</span> </p>
                  )}
                  <br/>
 
                  {numberOfNights > 0 && (
                  <div>
                    <p className="text-xl"> Total Estimated Price: S${TotalPrice}  </p>
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
                  )}
                </div>
              </div>
              <br/>
              <Link to={`/bookings/TermsAndConditions`}><button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">Terms And Conditions</button></Link>
              <br/>
              <button type="submit" className="btn btn-secondary cursor-pointer" disabled={disable} onClick={handleNewRoomBooking} >Confirm Booking</button>
              <br/>
              <Link to={`/rooms`}><button className="btn btn-primary cursor-pointer">Returns to Rooms</button></Link>
            </div> 
          </div>
      </form>           
  )
}

export default BookingForm;


// https://stackoverflow.com/questions/25159330/how-to-convert-an-iso-date-to-the-date-format-yyyy-mm-dd