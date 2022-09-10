import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import Header from '../Header/header';
import Login from '../Login/login';

import PatientService from "../../repository/repositoryPatinet";
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
import Patients from "../Patients/Patient/PatientList/patients";
import AppointmentAdd from "../Appointment/AppointmentAdd/appointmentAdd";
import VeterinarianEdit from "../Veterinary/Veterinarian/VeterinarianEdit/VeterinarianEdit";
import PatientsHome from "../Patients/Home/PatientsHome";
import OwnerView from "../Patients/Owner/OwnerView/ownerView";

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
                <Header onLogout={this.onLogout}/>

                <main>
                    <div className="container">

                        <Routes>
                            {/*login form start*/}
                            <Route path={"/login"}
                                   element={<Login onLogin={this.login}/>}/>
                            {/*login form end*/}

                            {/*veterinary region start*/}
                            <Route path={"/veterinary"}
                                   element={<Veterinaries/>}/>

                            <Route path={"/veterinary/add"}
                                   element={<VeterinaryAdd/>}/>

                            <Route path={"/veterinary/:id"}
                                   element={<VeterinaryView/>}/>

                            <Route path={"/veterinary/edit/:id"}
                                   element={<VeterinaryEdit/>}/>

                            <Route path={"/veterinary/:id/veterinarian"}
                                   element={<VeterinarianAdd/>}/>

                            <Route path={"/veterinary/:id/veterinarian/edit/:veterinarianId"}
                                   element={<VeterinarianEdit/>}/>
                            {/*veterinary region end*/}

                            {/*patients region start*/}
                            <Route path={"/home"}
                                   element={<PatientsHome/>}/>

                            <Route path={"/owners"}
                                   element={<Owners />}/>

                            <Route path={"/owners/add"}
                                   element={<OwnerAdd />}/>

                            <Route path={"/owner/:id"}
                                   element={<OwnerView/>}/>

                            <Route path={"/owner/edit/:id"}
                                   element={<OwnerEdit/>}/>

                            <Route path={"/owner/:id/patient/add"}
                                   element={<PatientAdd/>}/>


                            {/*patients region end*/}


                            <Route path={"/patients"}
                                   element={<Patients patients={this.state.patients}
                                                      onDelete={this.deletePatient}
                                                      onEdit={this.editPatient}/>}/>



                            <Route path={"/patients/edit/:id"}
                                   element={<PatientEdit patient={this.state.selectedPatient}
                                                         onEditPatient={this.editPatient}/>}/>



                            {/*appointment region start*/}
                            {/*<Route path={"/appointment"}*/}
                            {/*       element={<Appoint patients={this.state.patients}*/}
                            {/*                          onDelete={this.deletePatient}*/}
                            {/*                          onEdit={this.editPatient}/>}/>*/}

                            <Route path={"/appointment/book"}
                                   element={<AppointmentAdd onBookAppointment={this.bookAppointment}/>}/>

                            {/*<Route path={"/patients/edit/:id"}*/}
                            {/*       element={<PatientEdit patient={this.state.selectedPatient}*/}
                            {/*                             onEditPatient={this.editPatient}/>}/>*/}
                            {/*appointment region end*/}


                            <Route path="/" element={<Navigate replace to="/home"/>}/>

                        </Routes>
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
