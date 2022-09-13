import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientService from "../../../repository/repositoryPatient";
import AppointmentService from "../../../repository/repositoryAppointment";
import App from "../../App/App";
import VeterinaryService from "../../../repository/repositoryVeterinary";

const AppointmentAdd = () => {

    const history = useHistory();

    const [patients, setPatients] = useState([]);
    const [veterinarian, setVeterinarian] = useState({});
    const [owners, setOwners] = useState([]);

    const [formData, updateFormData] = useState({
        patientId: "",
        veterinarianId: "",
        date: ""
    });

    const bookAppointment = (patientId, veterinarianId, date) => {
        AppointmentService.bookAppointment(patientId, veterinarianId, date)
            .then( () => {
                history.push(`/appointments`)
            })
    }

    const loadOwners = () => {
        PatientService.fetchOwners()
            .then(data => setOwners(data.data))
    }

    const getVeterinarian = (id) => {
        VeterinaryService.getVeterinarianById(id)
            .then( (data) =>
                setVeterinarian(data.data))
        // AppointmentService.getVeterinarians()
    }

    useEffect(() => {
            loadOwners()
            getVeterinarian(localStorage.getItem("ID"))
            document.body.style.backgroundColor = "#e9ecda"
        }, []
    )

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };

    const handleChangeOwner = (e) => {
        let id = e.target.value.trim()
        if(id !== "") {
            let owner = owners.filter(o => o.id.id === id)
            if (owner[0].animalsList.length > 0) {
                setPatients(owner[0].animalsList)
            } else {
                setPatients([])
            }
        } else {
            setPatients(undefined)
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const patientId = formData.patientId;
        const veterinarianId = localStorage.getItem("ID");
        const date = formData.date;

        bookAppointment(patientId, veterinarianId, date)

        history.push(`/appointments`)
    }

    return (

        <div className="container w-50">

            <div className={"row mb-3 mt-5"}>
                <h5 className="margin-bottom-md green-text mt-2 text-center">
                    Book a new appointment
                </h5>
            </div>

            <form onSubmit={onFormSubmit}>

                <div className="row mb-3 mt-3">
                    <div className="col">
                        <label className={"ms-1 roboto-font"}>Owner:</label>
                        <select className="form-control" placeholder="Patient" name={"owner"}
                                required
                                onChange={handleChangeOwner}>

                            <option value="">Select an owner</option>
                             {owners.map((term) => {
                                return (
                                <option value={term.id.id}>{term.name} {term.surname}</option>
                                )})}

                        </select>
                    </div>
                    <div className="col">
                        <label className={"ms-1 roboto-font"}>Patient:</label>
                        <select className="form-control" placeholder="Patient" name={"patientId"}
                                required
                                onChange={handleChange}>
                            <option value="">Select a patient</option>
                            {patients.map((term) => {
                                return (
                                    <option value={term.id.id}>{term.name}</option>
                                )})}
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className={"ms-1 roboto-font"}>Veterinarian:</label>
                        <select className="form-control" placeholder="Veterinarian" name={"veterinarianId"}
                                required
                                onChange={handleChange} disabled={"true"}>
                            <option>{veterinarian.name} {veterinarian.surname}</option>

                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className={"ms-1 roboto-font"}>Appointment date:</label>
                        <input type={"date"} className="form-control" name="date" onChange={handleChange}/>
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
export default AppointmentAdd;