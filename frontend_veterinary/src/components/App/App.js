import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from '../Header/header';
import Login from '../Login/login';

import PatientService from "../../repository/repositoryPatient";
import AppointmentService from "../../repository/repositoryAppointment";

import VeterinaryAdd from "../Veterinary/Veterinary/VeterinaryAdd/veterinaryAdd";

import Veterinaries from "../Veterinary/Veterinary/VeterinaryList/veterinaries";
import VeterinarianAdd from "../Veterinary/Veterinarian/VeterinarianAdd/veterinarianAdd";
import VeterinaryView from "../Veterinary/Veterinary/VeterinaryView/veterinaryView";
import VeterinaryEdit from "../Veterinary/Veterinary/VeterinaryEdit/veterinaryEdit";
import OwnerAdd from "../Patients/Owner/OwnerAdd/ownerAdd";
import OwnerEdit from "../Patients/Owner/OwnerEdit/ownerEdit";
import Owners from "../Patients/Owner/OwnerList/owners";

import PatientAdd from "../Patients/Patient/PatientAdd/patientAdd";
import PatientEdit from "../Patients/Patient/PatientEdit/patientEdit";
import VeterinarianEdit from "../Veterinary/Veterinarian/VeterinarianEdit/VeterinarianEdit";
import PatientsHome from "../Patients/Home/PatientsHome";
import Patients from "../Patients/Patient/PatientList/patients";
import OwnerView from "../Patients/Owner/OwnerView/ownerView";
import AppointmentAdd from "../Appointment/AppointmentAdd/appointmentAdd";
import Appointments from "../Appointment/AppointmentList/appointments";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : {},
            veterinarians: [],
            appointments: [],
            owners: [],
            patients: [],
            selectedVeterinary: {},
            selectedVeterinarian: {},
            selectedPatient: {},
            selectedOwner: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>

                <main>
                    <div className="container">

                        {/*login form start*/}

                        <Route path={"/login"} exact render={() =>
                              <Login/>}/>
                        {/*login form end*/}

                        {/*veterinary region start*/}
                        <Route path={"/veterinary"} exact render={() =>
                            <Veterinaries/>}/>

                        <Route path={"/veterinary/add"} exact render={() =>
                            <VeterinaryAdd/>}/>

                        <Route path={"/veterinary/:id"} exact render={() =>
                            <VeterinaryView/>}/>

                        <Route path={"/veterinary/edit/:id"} exact render={() =>
                            <VeterinaryEdit/>}/>

                        <Route path={"/veterinary/:id/veterinarian"} exact render={() =>
                            <VeterinarianAdd/>}/>

                        <Route path={"/veterinary/:id/veterinarian/edit/:veterinarianId"} exact render={() =>
                            <VeterinarianEdit/>}/>
                        {/*veterinary region end*/}

                        {/*patients region start*/}
                        <Route path={"/home"} exact render={() =>
                            <PatientsHome/>}/>

                        <Route path={"/owners"} exact render={() =>
                            <Owners />}/>

                        <Route path={"/owners/add"} exact render={() =>
                            <OwnerAdd />}/>

                        <Route path={"/owner/:id"} exact render={() =>
                            <OwnerView/>}/>

                        <Route path={"/owner/edit/:id"} exact render={() =>
                            <OwnerEdit/>}/>

                        <Route path={"/owner/:id/patient/add"} exact render={() =>
                            <PatientAdd/>}/>

                        <Route path={"/owner/:id/patient/edit/:patientId"} exact render={() =>
                            <PatientEdit/>}/>

                        <Route path={"/patients"} exact render={() =>
                            <Patients/>}/>
                        {/*patients region end*/}

                        {/*appointment region start*/}
                        <Route path={"/appointments"} exact render={() =>
                            <Appointments/>}/>

                        <Route path={"/appointments/add"} exact render={() =>
                            <AppointmentAdd/>}/>


                        {/*appointment region end*/}

                    </div>
                </main>

            </Router>
        );
    }

    // appointment region start
    loadAppointments = () => {
        AppointmentService.fetchAppointments()
            .then((data) => {
                this.setState({
                    appointments: data.data
                })
            })
    }
    deleteAppointment = (id) => {
        AppointmentService.deleteAppointment(id)
            .then(() => {
                this.loadAppointments();
            })
    }
    getAppointment = (id) => {
        AppointmentService.getAppointment(id)
            .then((data) => {
                this.setState(({
                    selectedAppointment: data.data
                }))
            })
    }
    bookAppointment = (name, category, author, availableCopies) => {
        AppointmentService.bookAppointment(name, category, author, availableCopies)
            .then(() => {
                this.loadAppointments();
            })
    }
    editAppointment = (id, name, category, author, availableCopies) => {
        AppointmentService.editAppointment(id, name, category, author, availableCopies)
            .then(() => {
                this.loadAppointments();
            })
    }
    // appointment region end


    // patient region start

    deletePatient = (id) => {
        PatientService.deletePatient(id)
            .then(() => {
                this.loadPatients();
            })
    }
    getPatient = (id) => {
        PatientService.getOwner(id)
            .then((data) => {
                this.setState(({
                    selectedPatient: data.data
                }))
            })
    }
    addPatient = (name, birthDate, animalSpecie, breed, microchip, weight, gender) => {
        PatientService.addPatient(name, birthDate, animalSpecie, breed, microchip, weight, gender)
            .then(() => {
                this.loadPatients();
            })
    }
    editPatient = (id, name, birthDate, animalSpecie, breed, microchip, weight, gender) => {
        PatientService.addPatient(name, birthDate, animalSpecie, breed, microchip, weight, gender)
            .then(() => {
                this.loadPatients();
            })
    }
    // patient region end

}

export default App;
