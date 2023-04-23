import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Calendar from 'react-calendar'
// import FormCalendar from "./FormCalendar";

function BookingForm({user}) {

const [pets, setPets] = useState([]); 

  useEffect(() => {
    const fetchPeting = async () => {
      const response = await fetch(`/api/bookings/${user._id}/guestPet`);
      console.log("1. Response is "+response);
      const petData = await response.json();
      console.log("2. petData Response is "+ petData);
      setPets(petData);
    };
    fetchPeting();
  }, []);

  console.log("user is " + user);


    return (
        <div>
            <p>Room Booking Form (to delete later)</p>
            <br/>
            <form 
            // onSubmit={handleSubmitBooking} 
            >
            <div className="drawer drawer-mobile">
              {/* <figure> <img height="20"src={room.roomImageUrl} alt={room.roomName}/> </figure> */}
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    {/*  Page content here  */}
                    <h1 className="text-3xl font-bold py-2">Room Booking Form</h1> <br/>
                    <div className="form-control w-full max-w-xs">

                    <h1 className="">Customer Name: {user.name}</h1>
                    <h1 className="">Customer ID: {user._id}</h1>
                    <br/> 
                    
                    <p>"To insert calander here"</p>
                    
                    <br/> 

                    <span className="label-text">Type of Room </span>
                    <select 
                    name="roomsName"
                    required
                    className="select select-error w-full max-w-xs">
                      <option disabled selected>room name</option>
                      <option value="644284361fdd74e617c693be">Standard Suite</option>
                      <option value="644284361fdd74e617c693bf">Dreamy Suite</option>
                      <option value="644284361fdd74e617c693c0">Presidential Suite</option>
                    </select>
                    <br/>

                    <span className="label-text">Paw Guest Name</span>
                    <select 
                    name="petsName"
                    required
                    className="select select-error w-full max-w-xs">
                      <option disabled selected>pet name</option>
                      {pets.map((p) => (
                        <option value={p._id}>{p.petName}</option>
                      ))
                      }
                    </select>
                    <br/>

                    <label className="label"><span className="label-text">Additional Remarks</span></label>
                    <textarea 
                    placeholder="Remarks"
                    // name="remarks"
                    // value={}
                    // onChange={handleChange} 
                    className="textarea textarea-error textarea-bordered textarea-lg w-full max-w-xs" />
                    <br/>

                    </div>
                    <br/>
                    {/* <button type="submit" className="btn btn-secondary" onClick={handleNewRoomBooking} >Confirm Booking</button> */}
                    <button type="submit" className="btn btn-secondary" >Confirm Booking</button>
                </div> 
            </div>
          </form>           
        </div>
    );
}

export default BookingForm;