import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar/UserNavbar";

//! user edit pet's information WIP

function PetsEditForm({user}) {
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const navigate = useNavigate();

useEffect(() => {
    const fetchPet = async () => {
      const response = await fetch(`/api/pets/user/${id}`);
      console.log("1. Response is "+response);
      const petData = await response.json();
      console.log("2. petData Response is "+ petData);
      setPet(petData);
    };
    fetchPet();
  }, [id]);

    const handleChange = (event) => {
    const key = event.target?.name;
    const value = event.target?.value;
    setPet({ ...pet, [key]: value });
  };

  const handlePetInfoUpdate = async (event) => {
    event.preventDefault()
    const response = await fetch(`/api/pets/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });
    navigate('/pets');
  };

    return (
            <form autoComplete='off' >
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    {/*  Page content here  */}
                    <h1 className="text-3xl font-bold py-2 mt-14">Update My Paw Buddy's information!</h1> <br/>
                    <div className="form-control w-full max-w-xs">
                    
                    {/* <h1>{JSON.stringify(pet.User_ID)}</h1>  */}
                    <h1 className="hidden">User ID : {pet.User_ID}</h1> 
                    <label className="label"><span className="label-text">What does your paw buddy looks like?</span></label>
                    <input 
                    type="text" 
                    name="petImageUrl"
                    required
                    value={pet.petImageUrl  || ""}
                    onChange={handleChange}
                    placeholder="Insert Photo / image URL " 
                    className="input input-bordered input-error w-full max-w-xs" />
                    <br/> 

                    <label className="label"><span className="label-text">What is your paw buddy's name?</span></label>
                    <input 
                    type="text" 
                    name="petName"
                    required
                    value={pet.petName  || ""}
                    onChange={handleChange}
                    placeholder="Name" 
                    className="input input-bordered input-error w-full max-w-xs" />
                    <br/>

                    <label className="label"><span className="label-text">What is your paw buddy's breed?</span></label>
                    <input 
                    type="text" 
                    name="petBreed"
                    required
                    value={pet.petBreed  || ""}
                    onChange={handleChange}
                    placeholder="Pet's Breed" 
                    className="input input-bordered input-error w-full max-w-xs" />
                    <br/>

                    <span className="label-text">Select your paw buddy's Gender?</span>
                    <select 
                    name="petGender"
                    required
                    value={pet.petGender || ""}
                    onChange={handleChange}
                    className="select select-error w-full max-w-xs">
                      <option disabled selected>Select Gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handlePetInfoUpdate}>Update My Pet's Info</button>
                    <br/>
                    <Link to={`/pets/user/${pet._id}`}><button className="btn btn-active btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg" >Cancel</button></Link>
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <br/>
                <UserNavbar user={user}/>
            </div>
          </form>       
    );
}

export default PetsEditForm;

{/* <button>Update My Paw Buddy's information</button> */}