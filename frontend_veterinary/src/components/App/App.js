import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import Header from '../Header/header';
import Login from '../Login/login';

import PatientService from "../../repository/repositoryPatinet";
import AppointmentService from "../../repository/repositoryAppointment";
import VeterinaryService from "../../repository/repositoryVeterinary";

import VeterinaryAdd from "../Veterinary/VeterinaryAdd/veterinaryAdd";
import VeterinaryEdit from "../Veterinary/VeterinaryEdit/veterinaryEdit";
import Veterinaries from "../Veterinary/VeterinaryList/veterinaries";
import VeterinarianAdd from "../Veterinary/VeterinarianAdd/veterinarianAdd";
import VeterinaryView from "../Veterinary/VeterinaryView/veterinaryView";

import OwnerAdd from "../Owner/OwnerAdd/ownerAdd";
import OwnerEdit from "../Owner/OwnerEdit/ownerEdit";
import Owners from "../Owner/OwnerList/owners";

import PatientAdd from "../Patient/PatientAdd/patientAdd";
import PatientEdit from "../Patient/PatientEdit/patientEdit";
import Patients from "../Patient/PatientList/patients";
import AppointmentAdd from "../Appointment/AppointmentAdd/appointmentAdd";

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
                            {/*login form*/}
                            <Route path={"/login"}
                                   element={<Login onLogin={this.login}/>}/>

                            {/*veterinary region start*/}
                            <Route path={"/veterinary"}
                                   element={<Veterinaries onDelete={this.deleteVeterinary}
                                                          onEdit={this.getVeterinary}
                                                          onAddVeterinarian={this.getVeterinary}
                                                          onVeterinaryView={this.getVeterinary}/>}/>

                            <Route path={"/veterinary/:id"}
                                   element={<VeterinaryView veterinary={this.state.selectedVeterinary}
                                                            onDelete={this.deleteVeterinary}
                                                            onEdit={this.getVeterinary}
                                                            onAddVeterinarian={this.getVeterinary}
                                                            onDeleteVeterinarian={this.deleteVeterinarian}
                                                            onEditVeterinarian={this.getVeterinary}/>}/>

                            <Route path={"/veterinary/add"}
                                   element={<VeterinaryAdd onAddVeterinary={this.addVeterinary}/>}/>

                            <Route path={"/veterinary/addVeterinarian/:id"}
                                   element={<VeterinarianAdd veterinary={this.state.selectedVeterinary}
                                                            onAddVeterinarian={this.addVeterinarian}/>}/>

                            <Route path={"/veterinary/edit/:id"}
                                   element={<VeterinaryEdit veterinary={this.state.selectedVeterinary}
                                                            onEditVeterinary={this.editVeterinary}/>}/>

                            {/*veterinary region end*/}


                            {/*veterinarian region start*/}
                            {/*<Route path={"/veterinarians"}*/}
                            {/*       element={<Veterinarians veterinary={this.state.veterinarians}*/}
                            {/*                               onDelete={this.deleteVeterinarian}*/}
                            {/*                               onEdit={this.editVeterinarian}/>}/>*/}

                            <Route path={"/veterinarian/add"}
                                   element={<VeterinarianAdd onAddVeterinarian={this.addVeterinarian}/>}/>

                            {/*<Route path={"/veterinarian/edit/:id"}*/}
                            {/*       element={<VeterinarianEdit veterinarian={this.state.selectedVeterinarian}*/}
                            {/*                                  onEditVeterinarian={this.editVeterinarian}/>}/>*/}
                            {/*veterinarian region end*/}


                            {/*owner region start*/}
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

    componentDidMount() {

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

    // veterinary region start
    loadVeterinaries = () => {
        VeterinaryService.fetchVeterinaries()
            .then((data) => {
                this.setState({
                    veterinaries: data.data
                })
            })
    }

    deleteVeterinary = (id) => {
        VeterinaryService.deleteVeterinary(id)
            .then(() => {
                this.loadVeterinaries();
            })
    }

    getVeterinary = (id) => {
        VeterinaryService.getVeterinary(id)
            .then((data) => {
                this.setState(({
                    selectedVeterinary: data.data
                }))
            })
    }

    addVeterinary = (name, streetName, houseNumber, city, postalCode) => {
        VeterinaryService.addVeterinary(name, streetName, houseNumber, city, postalCode)
            .then(() => {
                this.loadVeterinaries();
            })
    }

    editVeterinary = (id, name, streetName, houseNumber, city, postalCode) => {
        VeterinaryService.editVeterinary(id, name, streetName, houseNumber, city, postalCode)
            .then(() => {
                this.loadVeterinaries();
            })
    }
    // veterinary region end

    // veterinarian region start
    loadVeterinarians = () => {
        VeterinaryService.fetchVeterinarians()
            .then((data) => {
                this.setState({
                    veterinarians: data.data
                })
            })
    }
    deleteVeterinarian = (id) => {
        VeterinaryService.deleteVeterinarian(id)
            .then(() => {
                this.loadVeterinarians();
            })
    }
    getVeterinarian = (id) => {
        VeterinaryService.getVeterinarian(id)
            .then((data) => {
                this.setState(({
                    selectedVeterinarian: data.data
                }))
            })
    }
    addVeterinarian = (id, name, surname, email, phone, streetName, houseNumber, city, postalCode, dateOfEmployment) => {
        VeterinaryService.addVeterinarian(id, name, surname, email, phone, streetName, houseNumber, city, postalCode, dateOfEmployment)
            .then(() => {
                this.loadVeterinarians();
            })
    }
    editVeterinarian = (id, name, surname, email, phone, address, dateOfEmployment) => {
        VeterinaryService.addVeterinarian(name, surname, email, phone, address, dateOfEmployment)
            .then(() => {
                this.loadVeterinarians();
            })
    }
    // veterinarian region end

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
