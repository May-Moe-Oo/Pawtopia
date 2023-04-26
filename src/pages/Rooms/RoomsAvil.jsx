import React from 'react';
import RoomCard from '../../components/RoomCard/RoomCard';
import comfy from '../../images/comfy.png';

function RoomsAvil() {
    return (
        <div className="justify-center">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    <h1 className="text-3xl font-bold my-12 py-2">Our rooms are designed to ensure your Paw Buddies feel just like they're at home.</h1>
                    <RoomCard/>
                    <img src={comfy} alt="comfy" className="h-96 rounded-lg shadow-2xl" />
                    
                </div> 
            </div>  
        </div>
    );
}

export default RoomsAvil;