import React from 'react';
import RoomCard from '../../components/RoomCard/RoomCard';

function RoomsAvil() {
    return (
        <div className="justify-center">
            <h1 className="text-4xl font-bold py-2">List of Room available</h1>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    <h1 className="text-2xl font-bold py-2">Our rooms are designed to ensure your Paw Buddies feel just like they're at home.</h1>
                    <br/>
                    <RoomCard/>
                </div> 
            </div>  
        </div>
    );
}

export default RoomsAvil;