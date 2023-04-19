import React from 'react';
import { useEffect, useState } from "react";
import PetCard from '../../components/PetCard/PetCard';

function Pets({user}) {
    const [pets, setPets] = useState([]);
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

    return (
        <div>
            {user && <h2>Welcome {user.name}</h2>}

            <h2>My Paw Buddies</h2>

            <h1>No Pet has been registered</h1>
            <button className="btn btn-outline btn-secondary">Add My Paw Buddy's information</button>
            <PetCard pets={pets}/>
        </div>
    );
}

// function Pets({user}) {
//     const [pets, setPets] = useState([]);

//     useEffect(() => {
//         const getPets = async () => {
//             const response = await fetch("/api/pets");
//             const data = await response.json();
//             setPets(data);
//         }
//         getPets();
//     }, []);

//     return (
//         <div>
//             {user && <h2>Welcome {user.name}</h2>}

//             <h2>My Paw Buddies</h2>

//             {pets.length === 0 ? (
//                 <div>
//                     <h1>No Pet has been registered</h1>
//                     <button className="btn btn-outline btn-secondary">Add My Paw Buddy's information</button>
//                 </div>
//             ) : (
//                 <div>
//                     {pets.map(pet => (
//                         <PetCard key={pet.id} pet={pet} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }
export default Pets;