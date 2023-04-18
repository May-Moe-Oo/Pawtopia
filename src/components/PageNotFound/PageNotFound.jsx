import React from 'react';
import { Link } from "react-router-dom";

function PageNotFound(props) {
    return (
        <div>
            <h1>Page Not Found.</h1>
            <Link to="/rooms">Check out our Rooms!</Link>
        </div>
    );
}

export default PageNotFound;