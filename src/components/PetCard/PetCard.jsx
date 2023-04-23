import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PetCard({userID}) {
    //! show the list of pets 
    const [pets, setPets] = useState([{ _id: "" }]);

    useEffect(() => {
        const fetchPets = async (req, res) => {
         const response = await fetch(`/api/pets/${userID}`);
        const petsData = await response.json();
        setPets(petsData);
        };
        fetchPets();
    },[]);

    const [selectedPet, setSelectedPet] = useState(null);

    const onclick = (id) => setSelectedPet(pets.find((p)=>p._id === id));

    return (
        <div>
            {/* <h1>"to display list of registered pets here - to work on this part"</h1> */}
        <div >
            {pets? pets.map((pet) => (
                <div key={pet._id} className="card card-compact w-96 bg-base-100">
                    <div onMouseOver={() => onclick(pet._id)}>
                        <Link to={`/pets/user/${pet._id}`}>
                            <figure> <img height="20"src={pet.petImageUrl} alt={pet.petName}/> </figure>
                            <div className="card-body items-center text-center">
                            <h2 className="card-title"> {pet.petName} </h2>
                            </div>
                        </Link>
                    </div>
                </div>
            )): 
            <div>
                <h1>No Pet Recorded Yet.</h1>
            </div>
            }        </div>
        {/* <Link to={`/pets/${selectedPet?._id}`} pets={pets} underline="none"/> */}
        </div>
    );
}

export default PetCard;

// petUrl,   petName,   petGender,   petAge,  petBreed 