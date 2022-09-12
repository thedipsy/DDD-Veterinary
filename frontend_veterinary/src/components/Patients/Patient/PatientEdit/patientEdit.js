import {useHistory, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientService from "../../../../repository/repositoryPatient";

const PatientEdit = () => {

    const history = useHistory();
    const id = useParams().id;
    const patientId = useParams().patientId;

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

    const [patient, setPatient] = React.useState({
        name: "",
        birthDate: "",
        animalSpecie: "",
        breed: "",
        microchip: {
            serialNumber: "",
            dateImplemented: ""
        },
        weight: {
            baseUnit: "",
            amount: ""
        },
        gender: ""
    });

    useEffect(() => {
            PatientService.getOwner(id)
                .then(data => setOwner(data.data))
            PatientService.getPatient(id, patientId)
                .then(data => setPatient(data.data))
            PatientService.getAnimalSpecies()
                .then(data => setAnimalSpecies(data.data))
            PatientService.getWeightBaseUnits()
                .then(data => setWeightBaseUnits(data.data))

            document.body.style.backgroundColor = "#e9ecda";
        }, []
    )

    const editPatient = (id, patientId, name, birthDate, animalSpecie, breed, serialNumber, dateImplemented, amount, baseUnit, gender) => {
        PatientService.editPatient(id, patientId, name, birthDate, animalSpecie, breed, serialNumber, dateImplemented, amount, baseUnit, gender)
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

        const name = formData.name !== "" ? formData.name : patient.name;
        const animalSpecie = formData.animalSpecie !== "" ? formData.animalSpecie : patient.animalSpecie;
        const breed = formData.breed !== "" ? formData.breed : patient.breed;
        const serialNumber = formData.serialNumber !== "" ? formData.serialNumber : patient.microchip.serialNumber;
        const dateImplemented = formData.dateImplemented !== "" ? formData.dateImplemented : patient.microchip.dateImplemented;
        const amount = formData.amount !== "" ? formData.amount : patient.weight.amount;
        const baseUnit = formData.baseUnit !== "" ? formData.baseUnit : patient.weight.baseUnit
        const birthDate = formData.birthDate !== "" ? formData.birthDate : patient.birthDate;
        const gender = formData.gender !== "" ? formData.gender : patient.gender;

        editPatient(id, patientId, name, birthDate, animalSpecie, breed, serialNumber, dateImplemented, amount, baseUnit, gender);
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
                        <input className="form-control" placeholder={patient.name} name={"name"}
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <select className="form-control" placeholder={patient.animalSpecie} name={"animalSpecie"}
                                required
                                onChange={handleChange}>
                            {animalSpecies.map((term) => {
                                return (
                                    <option value={term}>{term}</option>
                                )})}

                        </select>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder={patient.breed} name={"breed"}
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder={patient.microchip.serialNumber} name={"serialNumber"}
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
                        <input className="form-control" placeholder={patient.weight.amount} name={"amount"}
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <select className="form-control" placeholder={patient.weight.baseUnit} name={"baseUnit"}
                                required value={patient.weight.baseUnit}
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
                        <input className="form-control" placeholder={patient.birthDate} name={"birthDate"} type={"date"}
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
export default PatientEdit;