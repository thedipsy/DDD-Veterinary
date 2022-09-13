import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import VeterinaryService from "../../../../repository/repositoryVeterinary";

const VeterinaryAdd = () => {

    const history = useHistory();

    const [formData, updateFormData] = useState({
        name : "",
        streetName : "",
        houseNumber : "",
        city : "",
        postalCode : ""
    });

    //e event koj se kreira on change
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };

    const addVeterinary = (name, streetName, houseNumber, city, postalCode) => {
        VeterinaryService.addVeterinary (name, streetName, houseNumber, city, postalCode)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const name = formData.name;
        const streetName = formData.streetName;
        const houseNumber = formData.houseNumber;
        const city = formData.city;
        const postalCode = formData.postalCode;

        addVeterinary(name, streetName, houseNumber, city, postalCode);

        history.push(`/veterinary`)

    }

    useEffect(() => {
            document.body.style.backgroundColor = "#e9ecda"
        }, []
    )

    return (
        <div className="container w-50 roboto-font">

            <div className={"row mb-3 mt-5"}>
                <h5 className="margin-bottom-md green-text mt-2 text-center">
                    Add a new vet clinic
                </h5>
            </div>

            <form onSubmit={onFormSubmit}>

                <div className="row mb-3">
                    <div className="col">
                        <label className={"ms-1"}>Name:</label>
                        <input className="form-control"
                               name="name"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className={"ms-1"}>Street Name:</label>
                        <input className="form-control"
                               name="streetName"
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <label className={"ms-1"}>Building Number:</label>
                        <input className="form-control"
                               name="houseNumber"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className={"ms-1"}>City:</label>
                        <input className="form-control"
                               name="city"
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <label className={"ms-1"}>Postal Code:</label>
                        <input className="form-control"
                               name="postalCode"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3 mt-4">
                    <div className="col">
                        <button type="submit" className="btn btn-success btn-lg btn-block w-100">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default VeterinaryAdd;
