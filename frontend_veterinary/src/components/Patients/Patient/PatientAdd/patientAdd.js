import {useHistory, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientService from "../../../../repository/repositoryPatient";

const PatientAdd = () => {

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

    const [animalSpecies, setAnimalSpecies] = useState([])
    const [weightBaseUnits, setWeightBaseUnits] = useState([])

    useEffect(() => {
            PatientService.getOwner(id)
                .then(data => setOwner(data.data))
            PatientService.getAnimalSpecies()
                .then(data => setAnimalSpecies(data.data))
            PatientService.getWeightBaseUnits()
                .then(data => setWeightBaseUnits(data.data))

            document.body.style.backgroundColor = "#e9ecda";
        }, []
    )

    const addPatient = (id, name, birthDate, animalSpecie, breed, serialNumber, dateImplemented, amount, baseUnit, gender) => {
        PatientService.addPatient(id, name, birthDate, animalSpecie, breed, serialNumber, dateImplemented, amount, baseUnit, gender)
            .then( () => {
                history.push(`/owner/${id}`)
            })
    }

    const [formData, updateFormData] = React.useState({
        name: "",
        birthDate: "",
        animalSpecie: "",
        breed: "",
        serialNumber: "",
        dateImplemented: "",
        baseUnit: "",
        amount: "",
        gender: ""
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        const name = formData.name;
        const animalSpecie = formData.animalSpecie !== "" ? formData.animalSpecie : animalSpecies[0];
        const breed = formData.breed;
        const serialNumber = formData.serialNumber !== "" ? formData.serialNumber : undefined;
        const dateImplemented = formData.dateImplemented !== "" ? formData.dateImplemented : undefined;
        const amount = formData.amount;
        const baseUnit = formData.baseUnit !== "" ? formData.baseUnit : weightBaseUnits[0];
        const birthDate = formData.birthDate;
        const gender = formData.gender;

        addPatient(id, name, birthDate, animalSpecie, breed, serialNumber, dateImplemented, amount, baseUnit, gender);
    }

    return (

        <div className="container w-50">

            <div className={"row mb-3 mt-5"}>
                <h5 className="margin-bottom-md green-text mt-2 text-center">
                    Add a new patient
                </h5>
            </div>

            <form onSubmit={onFormSubmit}>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Name" name={"name"}
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <select className="form-control" placeholder="Animal Specie" name={"animalSpecie"}
                               required
                                onChange={handleChange}>
                            {animalSpecies.map((term) => {
                                return (
                                    <option value={term}>{term}</option>
                                )})}

                        </select>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Breed" name={"breed"}
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Microchip Serial Number" name={"serialNumber"}
                               onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <input className="form-control" placeholder="Microchip Date Implemented" name={"dateImplemented"}
                               type={"date"}
                               onChange={handleChange}/>
                    </div>
                </div>


                <div className="row mb-3">

                    <div className="col">
                        <input className="form-control" placeholder="Weight" name={"amount"}
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <select className="form-control" placeholder="Weight Base Unit" name={"baseUnit"}
                                required
                                onChange={handleChange}>
                                    {weightBaseUnits.map((term) => {
                                        return (
                                            <option value={term}>{term}</option>
                                        )})}
                        </select>
                    </div>



                    <div className={"col"}>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender"
                                   value="MALE"
                                   required
                                   onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender"
                                   value="FEMALE"
                                   required
                                   onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Birth Date" name={"birthDate"} type={"date"}
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
export default PatientAdd;