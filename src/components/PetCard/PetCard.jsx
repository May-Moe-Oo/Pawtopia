import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PetCard() {
    //! show the list of pets 
    const [pets, setPets] = useState([{ _id: "" }]);

    useEffect(() => {
        fetch("/api/pets")
        .then((response) => response.json())
        .then((data) => setPets(data));
    }, []);

    // useEffect(() => {
    //     const getPets = async () => {
    //     const response = await fetch("/api/pets")
    //     const data = await response.json();
    //     setPets(data);
    //     };
    //     getPets();
    // }, []);

    const [selectedPet, setSelectedPet] = useState(null);

    const onclick = (id) => setSelectedPet(pets.find((p)=>p._id === id));

    return (
        <div>
            
        <div>
            {pets.map((pet) => (
                <div key={pet._id}>
                    <div onMouseOver={() => onClick(pet._id)}>

                    {/* <Link to={`/pets/${pet._id}`}>
                    <StyledCard >
                     <CardContent >   
                     <CardMedia
                        component="img"
                        height="200"
                        image={pet.petUrl}
                        alt={pet.petName}
                    /> <br></br>
                    <h2>
                      {pet.petName}
                    </h2>
                    </CardContent>
                    </StyledCard> 
                    </Link> */}
                   

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