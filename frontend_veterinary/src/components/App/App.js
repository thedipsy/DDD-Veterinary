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
import PatientsHome from "../Patients/PatientsHome";

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


                            {/*veterinarian region start*/}
                            {/*<Route path={"/veterinarians"}*/}
                            {/*       element={<Veterinarians veterinary={this.state.veterinarians}*/}
                            {/*                               onDelete={this.deleteVeterinarian}*/}
                            {/*                               onEdit={this.editVeterinarian}/>}/>*/}

                            {/*<Route path={"/veterinarian/edit/:id"}*/}
                            {/*       element={<VeterinarianEdit veterinarian={this.state.selectedVeterinarian}*/}
                            {/*                                  onEditVeterinarian={this.editVeterinarian}/>}/>*/}
                            {/*veterinarian region end*/}


                            {/*owner region start*/}


                            <Route path={"/patientsHome"}
                                   element={<PatientsHome/>}/>

                            <Route path={"/owners"}
                                   element={<Owners veterinary={this.state.owners}
                                                    onDelete={this.deleteOwner}
                                                    onEdit={this.editOwner}/>}/>

                            <Route path={"/owners/add"}
                                   element={<OwnerAdd onAddOwner={this.addOwner}/>}/>

                            <Route path={"/owners/edit/:id"}
                                   element={<OwnerEdit Owner={this.state.selectedOwner}
                                                       onEditOwner={this.editOwner}/>}/>
                            {/*owner region end*/}


                            {/*patient region start*/}
                            <Route path={"/patients"}
                                   element={<Patients patients={this.state.patients}
                                                      onDelete={this.deletePatient}
                                                      onEdit={this.editPatient}/>}/>

                            <Route path={"/patients/add"}
                                   element={<PatientAdd onAddPatient={this.addPatient}/>}/>

                            <Route path={"/patients/edit/:id"}
                                   element={<PatientEdit patient={this.state.selectedPatient}
                                                         onEditPatient={this.editPatient}/>}/>
                            {/*patient region end*/}

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
    loadPatients = () => {
        PatientService.fetchOwners()
            .then((data) => {

                if (data.data.length) {
                    data.data.forEach(v => {
                        this.setState(prevState => ({
                            patients: [...prevState.patients, {"name": v.animals}]
                        }))
                    })
                }
            })
    }
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

    // owner region start
    loadOwners = () => {
        PatientService.fetchOwners()
            .then((data) => {
                this.setState({
                    owners: data.data
                })
            })
    }
    deleteOwner = (id) => {
        PatientService.deleteOwner(id)
            .then(() => {
                this.loadOwners();
            })
    }
    getOwner = (id) => {
        PatientService.getOwner(id)
            .then((data) => {
                this.setState(({
                    selectedOwner: data.data
                }))
            })
    }
    addOwner = (name, surname, phone, email, streetName, houseNumber, city, postalCode) => {
        PatientService.addOwner(name, surname, phone, email, streetName, houseNumber, city, postalCode)
            .then(() => {
                this.loadOwners();
            })
    }
    editOwner = (id, name, surname, phone, email, address) => {
        PatientService.addOwner(name, surname, phone, email, address)
            .then(() => {
                this.loadOwners();
            })
    }
    // owner region end

}

export default App;
