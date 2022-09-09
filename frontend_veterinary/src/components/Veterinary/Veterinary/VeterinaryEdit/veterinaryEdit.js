import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import VeterinaryService from "../../../../repository/repositoryVeterinary";

const VeterinaryEdit = () => {

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
        streetName : "",
        houseNumber : "",
        city : "",
        postalCode : ""
    });

    useEffect(() => {
            // veterinarian region start
            VeterinaryService.getVeterinary(id)
                .then(data => setVeterinary(data.data))
        document.body.style.backgroundColor = "#e9ecda";
        }, []
    )

    const editVeterinary = (id, name, streetName, houseNumber, city, postalCode) => {
        VeterinaryService.editVeterinary(id, name, streetName, houseNumber, city, postalCode)
            .then(() => {
                this.loadVeterinaries();
            })
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };

    const onFormSubmit = (e) => {
        e.preventDefault(); //ne gi prakjaj vednas podatocite kako post request tuku napravi go slednoto podolu

        const name = formData.name !== "" ? formData.name : veterinary.name;
        const streetName = formData.streetName !== "" ? formData.streetName : veterinary.address.streetName;
        const houseNumber = formData.houseNumber !== "" ? formData.houseNumber : veterinary.address.houseNumber;
        const city = formData.city !== "" ? formData.city : veterinary.address.city;
        const postalCode = formData.postalCode !== "" ? formData.postalCode : veterinary.address.postalCode;

        editVeterinary(id, name, streetName, houseNumber, city, postalCode);
        navigate('/veterinary'); //vrati me na veterinary
    }

    return (
        <div className="container w-50">

            <div className={"row mb-3 mt-5"}>
                <h1 className="mt-2 mb-2 link-class text-center">
                    {veterinary.name}
                </h1>
                <h5 className="margin-bottom-md green-text mt-2 text-center">
                    Edit general info
                </h5>
            </div>

            <form onSubmit={onFormSubmit}>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={veterinary.name}
                               name="name"
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={veterinary.address.streetName}
                               name="streetName"
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder={veterinary.address.houseNumber}
                               name="houseNumber"
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={veterinary.address.city}
                               name="city"
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder={veterinary.address.postalCode}
                               name="postalCode"
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

export default VeterinaryEdit;