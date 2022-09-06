import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import VeterinaryService from "../../../repository/repositoryVeterinary";


const VeterinaryEdit = (props) => {
    const navigate = useNavigate(); //da moze da redirektirame na nova pateka
    const [formData, updateFormData] = React.useState({
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

    const onFormSubmit = (e) => {
        e.preventDefault(); //ne gi prakjaj vednas podatocite kako post request tuku napravi go slednoto podolu

        const name = formData.name !== "" ? formData.name : props.veterinary.name;
        const streetName = formData.streetName !== "" ? formData.streetName : props.veterinary.address.streetName;
        const houseNumber = formData.houseNumber !== "" ? formData.houseNumber : props.veterinary.address.houseNumber;
        const city = formData.city !== "" ? formData.city : props.veterinary.address.city;
        const postalCode = formData.postalCode !== "" ? formData.postalCode : props.veterinary.address.postalCode;

        props.onEditVeterinary(props.veterinary.id.id, name, streetName, houseNumber, city, postalCode);
        navigate('/veterinary'); //vrati me na veterinary
    }

    let address
    if(props.veterinary !== undefined && props.veterinary.address !== undefined){
        address = props.veterinary.address
    } else {
        address = {}
    }

    return (
        <div className="container w-50">

            <div className={"row mb-3 mt-5"}>
                <h1 className="mt-2 mb-2 link-class text-center">
                    {props.veterinary.name}
                </h1>
                <h5 className="margin-bottom-md text-primary mt-2 text-center">
                    Edit general info
                </h5>
            </div>

            <form onSubmit={onFormSubmit}>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={props.veterinary.name}
                               name="name"
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={address.streetName}
                               name="streetName"
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder={address.houseNumber}
                               name="houseNumber"
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={address.city}
                               name="city"
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder={address.postalCode}
                               name="postalCode"
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )


}

export default VeterinaryEdit;