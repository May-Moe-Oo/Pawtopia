import React from 'react';
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar/UserNavbar";

//! show pet's infor, edit and delete button - WIP

function PetsInfo({user}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pet, setPet] = useState({});

    // fetch a pet based on a specific id passed as a dependency
  useEffect(() => {
    const fetchPet = async () => {
      const response = await fetch(`/api/pets/${id}`); //! not working here 
      console.log("1. Res = "+ response);
      console.log("Data = "+ response.data);
      const petData = await response.json();
      console.log("petData = "+ petData);
      setPet(petData);
    }; 
    fetchPet();
  }, [id]);
  
  const handleDelete = async (id) => { 
    try {
      const response = await fetch(`/api/pets/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      navigate("/pets");
    } catch (error) {
      console.error(error);
    }
  };
if (Object.keys(pet).length === 0) {
    return (
      <> <p>No Pet Information has been recorded yet</p> 
      </>
    );
  } else {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <h2>All My Paw Buddies's information (to delete later)</h2>
            <figure> <img height="20"src={pet.petImageUrl} alt={pet.petName}/> </figure>
            <div className="card-body">
                <h2 className="card-title">Pet Name: {pet.petName}</h2>
                 <p>Other Pet's info</p>
                    <div className="card-actions justify-end">
                     <Link to={`/pets/${pet._id}/edit`}> 
                     <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Edit</button>
                     </Link> <span/>
                     <button className="btn btn-error btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => handleDelete(pet._id)}>Delete</button>
                    </div>
             </div>
        </div><br/>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div> <UserNavbar user={user}/>
        </div>

    );
  }
}

export default PetsInfo;

