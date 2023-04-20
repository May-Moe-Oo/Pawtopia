import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PetCard({users, setUser}) {
    //! show the list of pets 
    const [pets, setPets] = useState([{ _id: "" }]);

    useEffect(() => {
        fetch("/api/pets")
        .then((response) => response.json())
        .then((data) => setPets(data));
    }, []);

    const [selectedPet, setSelectedPet] = useState(null);

    const onclick = (id) => setSelectedPet(pets.find((p)=>p._id === id));

    return (
        <div>
            <h1>"to display list of registered pets here - to work on this part"</h1>
        <div>
            {pets.map((pet) => (
                <div key={pet._id}>
                    <div onMouseOver={() => onClick(pet._id)}>

                    <Link to={`/pets/${pet._id}`}>
                     <img
                        height="20"
                        src={pet.petImageUrl}
                        alt={pet.petName}
                    /> <br></br>
                    <h2>
                      {pet.petName}
                    </h2>
                    </Link>
                    </div>
                </div>
            ))}
            <Link to={`/pets/${selectedPet?._id}`} pets={pets} underline="none"/>
        </div>
        </div>
    );
}

export default PetCard;

 {/* petUrl,   petName,   petGender,   petAge,  petBreed */}