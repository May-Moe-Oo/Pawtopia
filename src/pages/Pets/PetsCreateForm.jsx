import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
//! create and add new Pet's information

function PetsCreateForm({user, setUser}) {
    // const { id } = useParams();
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const addPet = (pet) => setPets([pet, ...pets]); // add new pet 
    const [data, setData] = useState({
    petImageUrl: "",
    petName: "",
    petGender: "",
    petBreed: "",
    User_ID: user._id,
    });
    // console.log("Before data is "+ data);
 
  // const validateSchema = Yup.object().shape({
  //   petImageUrl: Yup.string().url().nullable(),
  //   petName: Yup.string().required("This field is required"),
  //   petGender: Yup.string().required("This field is required"),
  //   petBreed: Yup.string().required("This field is required"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     petImageUrl: "",
  //     petName: "",
  //     petGender: "",
  //     petBreed: "",
  //   },
  //   validationSchema: validateSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     console.log(values);
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //       resetForm();
  //     }, 1000 * 2);
  //   },
  // });

  function handleChange(event) {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
    console.log("After chg data is" + data);
  }
  const handleAddNewPet = async (event) => {
    event.preventDefault()
    const response = await fetch("/api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      });
      const pet = await response.json();
      addPet(pet);
    console.log("New Pet information registered");
    navigate('/users/pets');
  };

    function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(data));
    }
    
    return (
        <div>
          <form onSubmit={handleSubmit} >
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    {/*  Page content here  */}
                    <h1 className="text-3xl font-bold py-2">Record My Paw Buddy's information!</h1> <br/>
                    <div className="form-control w-full max-w-xs">
                    
                    {/* <h1 > {JSON.stringify(user._id)}</h1>  */}
                    <h1>user id : {data.User_ID}</h1>
                    <br/>

                    <label className="label"><span className="label-text">What does your paw buddy looks like?</span></label>
                    <input 
                    type="text" 
                    name="petImageUrl"
                    required
                    value={data.petImageUrl}
                    onChange={handleChange}
                    placeholder="Insert Photo / image URL " 
                    className="input input-bordered input-error w-full max-w-xs" />
                    <br/>

                    <label className="label"><span className="label-text">What is your paw buddy's name?</span></label>
                    <input 
                    type="text" 
                    name="petName"
                    required
                    value={data.petName}
                    onChange={handleChange}
                    placeholder="Name" 
                    className="input input-bordered input-error w-full max-w-xs" />
                    <br/>

                    <label className="label"><span className="label-text">What is your paw buddy's breed?</span></label>
                    <input 
                    type="text" 
                    name="petBreed"
                    required
                    value={data.petBreed}
                    onChange={handleChange}
                    placeholder="Pet's Breed" 
                    className="input input-bordered input-error w-full max-w-xs" />
                    <br/>

                    <span className="label-text">Select your paw buddy's Gender?</span>
                    <select 
                    name="petGender"
                    required
                    value={data.petGender}
                    onChange={handleChange}
                    className="select select-error w-full max-w-xs">
                      {/* <option disabled value >Select Gender</option> */}
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-secondary" onClick={handleAddNewPet}>Add Pet's Info</button>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 

                <UserNavbar />
            </div>
          </form>           
        </div>
    );
}

export default PetsCreateForm;