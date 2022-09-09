import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import VeterinaryService from "../../../../repository/repositoryVeterinary";

const VeterinarianAdd = (props) => {

    const navigate = useNavigate(); //da moze da redirektirame na nova pateka
    const id = useParams().id;

    const [veterinary, setVeterinary] = useState({
        name : "",
        address : {
            streetName : "",
            houseNumber : "",
            city : "",
            postalCode : ""
        }})

    const [formData, updateFormData] = useState({
        name : "",
        surname : "",
        email : "",
        phone : "",
        streetName : "",
        houseNumber : "",
        city : "",
        postalCode : "",
        dateOfEmployment: ""
    });

    const getVeterinary = () => {
        VeterinaryService.getVeterinary(id)
            .then(data => setVeterinary(data.data))
    }

    const addVeterinarian = (id, name, surname, email, phone, streetName, houseNumber, city, postalCode, dateOfEmployment) => {
        VeterinaryService.addVeterinarian(id, name, surname, email, phone, streetName, houseNumber, city, postalCode, dateOfEmployment)
    }

    useEffect(() => {
        getVeterinary()
        }, []
    )

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };

    const onFormSubmit = (e) => {
        e.preventDefault(); //ne gi prakjaj vednas podatocite kako post request tuku napravi go slednoto podolu

        const name = formData.name;
        const surname = formData.surname;
        const email = formData.email;
        const phone = formData.phone;
        const streetName = formData.streetName;
        const houseNumber = formData.houseNumber;
        const city = formData.city;
        const postalCode = formData.postalCode;
        const dateOfEmployment = formData.dateOfEmployment;

        addVeterinarian(id, name, surname, email, phone, streetName, houseNumber, city, postalCode, dateOfEmployment);
        navigate(`/veterinary/${id}`); //overview na veterinarians vo veterinary
    }

    return (

        <div className="container w-50">

            <div className={"row mb-3 mt-5"}>
                <h1 className="mt-2 mb-2 link-class text-center">
                    {veterinary.name}
                </h1>
                <h5 className="margin-bottom-md green-text mt-2 text-center">
                    Add a veterinarian
                </h5>
            </div>

            <form onSubmit={onFormSubmit}>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="First Name"
                               name="name"
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Last Name"
                               name="surname"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Email Address"
                               name="email"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Phone"
                               name="phone"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Street Name"
                               name="streetName"
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Building Number"
                               name="houseNumber"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="City"
                               name="city"
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Postal Code"
                               name="postalCode"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" type={"date"}
                               name="dateOfEmployment"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <button type="submit" className="btn btn-success btn-lg btn-block w-100">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default VeterinarianAdd;