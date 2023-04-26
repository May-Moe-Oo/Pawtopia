import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PetCard from '../../components/PetCard/PetCard';
import UserNavbar from "../../components/UserNavbar/UserNavbar";

function Pets({user}) {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const getPets = async () => {
        const response = await fetch(`/api/pets/${user._id}`)
        const data = await response.json();
        setPets(data);
        };
        getPets();
    }, []);

    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    <h1 className="text-5xl font-bold mt-16 mb-5">My Paw Buddies</h1> <br/>
                    <Link to={`/pets/new`}> <button className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add My Paw Buddy's information</button></Link>
                    <br />
                    {pets.length === 0 ? (
                        <div className='text text-center'>
                            <h1 className='text-3xl font-bold'>Sorry, no Pet has been registered.</h1>
                            <h1 className='text-2xl font-bold mt-5'>Please add before booking a room reservation.</h1>
                        </div>
                        
                    ) : (
                        <PetCard pets={pets} userID={user._id} />
                    )}
                    <br/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <br/>
                <UserNavbar user={user}/>
            </div>           
        </div>
    )
};

export default Pets;
