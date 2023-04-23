import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingForm from '../../components/BookingForm/BookingForm';

function NewBooking({user}) {

    return (
        <div>
            <p>newBooking Page (please login to access)</p>
            {user ? ( <BookingForm user={user} /> ) : (null)}  
            {/* <BookingForm user={user} />  */}
            {/* to replace */}
        </div>
    );
}

export default NewBooking;