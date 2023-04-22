import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BookingForm() {

    return (
        <div>
            <p>Room Booking Form (to delete later)</p>
            <br/>
            <form  >
            <div className="drawer drawer-mobile">
              {/* <figure> <img height="20"src={room.roomImageUrl} alt={room.roomName}/> </figure> */}
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    {/*  Page content here  */}
                    <h1 className="text-3xl font-bold py-2">Room Booking Form</h1> <br/>
                    <div className="form-control w-full max-w-xs">

                    {/* <h1 className="hidden">User ID : {data.User_ID}</h1> */}
                    <p>"To insert calander here"</p>
                    {/* <br/> 
                    <label className="label"><span className="label-text">Room Name</span></label>
                    <input 
                    type="text" 
                    // name=""
                    // required
                    // value={}
                    // onChange={handleChange}
                    placeholder="Room Name" 
                    className="input input-bordered input-error w-full max-w-xs" /> */}
                    <br/> 

                    <span className="label-text">Type of Room </span>
                    <select 
                    // name=""
                    required
                    // value={}
                    // onChange={handleChange}
                    className="select select-error w-full max-w-xs">
                      <option disabled selected>room name</option>
                      <option value="">ref n map out room name</option>
                    </select>
                    <br/>

                    <span className="label-text">Guest Name</span>
                    <select 
                    // name=""
                    required
                    // value={}
                    // onChange={handleChange}
                    className="select select-error w-full max-w-xs">
                      <option disabled selected>pet name</option>
                      <option value="">ref n map out pet name</option>
                    </select>
                    <br/>

                    <label className="label"><span className="label-text">Additional Remarks</span></label>
                    <textarea 
                    placeholder="Remarks"
                    // name=""
                    // value={}
                    // onChange={handleChange} 
                    className="textarea textarea-error textarea-bordered textarea-lg w-full max-w-xs" />


                    <br/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-secondary">Confirm Booking</button>

                </div> 
            </div>
          </form>           
        </div>
    );
}

export default BookingForm;