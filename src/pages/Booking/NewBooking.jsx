import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingForm from '../../components/BookingForm/BookingForm';

function NewBooking({user}) {
    return (
        <div>
            <p>newBooking Page (to delete later)</p>
            {/* {user ? ( <BookingForm/> ) : (null)}   */}
            <BookingForm/> {/* to replace */}
        </div>
    );
}

export default NewBooking;