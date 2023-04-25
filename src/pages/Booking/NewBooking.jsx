import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingForm from '../../components/BookingForm/BookingForm';

function NewBooking({user}) {

    return (
        <div className="">
            <p>newBooking Page (login to access)</p>
            <p className="text-align-center">(to add the 3 rooms img and names Here)</p>

            {user ? ( <BookingForm user={user} /> ) : (null)}  
        </div>
    );
}

export default NewBooking;