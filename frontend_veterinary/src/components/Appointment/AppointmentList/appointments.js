import React, {useEffect, useState} from "react";
import AppointmentService from "../../../repository/repositoryAppointment";
import AppointmentTerm from "../AppointmentTerm/appointmentTerm";

const Appointments = () => {

    const [appointments, setAppointments] = useState([])

    const loadAppointments = () => {
        AppointmentService.fetchAppointments()
            .then(data => setAppointments(data.data))
    }

    const deleteAppointment = (id) => {
        AppointmentService.deleteAppointment(id)
            .then(() => {
                loadAppointments()
            })
    }

    useEffect(() => {
        loadAppointments()
            document.body.style.backgroundColor = "#e9ecda"
        }, []
    )

    return(
        <div>
            <div className={"container mm-4 mt-5"}>

                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12 roboto-font">
                        <a href={"/appointments/add"} className="btn btn-block btn-dark add-product-btn">
                            Book an appointment
                        </a>
                    </div>
                </div>


                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope="col" className={"roboto-font"}>Appointments</th>
                                <th scope="col"/>
                            </tr>
                            </thead>
                            <tbody>
                            {appointments.map((term) => {
                                return (
                                    <AppointmentTerm term={term} onDelete={deleteAppointment}/>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointments;