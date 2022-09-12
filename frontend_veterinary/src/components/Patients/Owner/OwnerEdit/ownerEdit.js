import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import PatientService from "../../../../repository/repositoryPatient";

const OwnerEdit = () => {

    const history = useHistory();
    const id = useParams().id;

    const [owner, setOwner] = useState({
        name : "",
        surname : "",
        email : "",
        phone : "",
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
    });

    const editOwner = (id, name, surname, email, phone, streetName, houseNumber, city, postalCode) => {
        PatientService.editOwner(id, name, surname, email, phone, streetName, houseNumber, city, postalCode)
            .then( () => {
                history.push(`/owner`)
            })
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };

    useEffect(() => {
            PatientService.getOwner(id)
                .then(data => setOwner(data.data))
            document.body.style.backgroundColor = "#e9ecda";
        }, []
    )

    const onFormSubmit = (e) => {
        e.preventDefault();

        const name = formData.name !== "" ? formData.name : owner.name;
        const surname = formData.surname !== "" ? formData.surname : owner.surname;
        const email = formData.email !== "" ? formData.email : owner.email;
        const phone = formData.phone !== "" ? formData.phone : owner.phone;
        const streetName = formData.streetName !== "" ? formData.streetName : owner.address.streetName;
        const houseNumber = formData.houseNumber !== "" ? formData.houseNumber : owner.address.houseNumber;
        const city = formData.city !== "" ? formData.city : owner.address.city;
        const postalCode = formData.postalCode !== "" ? formData.postalCode : owner.address.postalCode;

        editOwner(id, name, surname, email, phone, streetName, houseNumber, city, postalCode);
    }

    return (

        <div className="container w-50">
            <div className={"row mb-3 mt-5"}>
                <h1 className="mt-2 mb-2 link-class text-center">

                </h1>
                <h5 className="margin-bottom-md green-text mt-2 text-center">
                    Edit owner information
                </h5>
            </div>
            <form onSubmit={onFormSubmit}>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={owner.name}
                               name="name"
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder={owner.surname}
                               name="surname"
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={owner.email}
                               name="email"
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={owner.phone}
                               name="phone"
                               onChange={handleChange}/>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={owner.address.streetName}
                               name="streetName"
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder={owner.address.houseNumber}
                               name="houseNumber"
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={owner.address.city}
                               name="city"
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder={owner.address.postalCode}
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

export default OwnerEdit;