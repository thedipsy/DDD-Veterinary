import React, {useEffect, useState} from "react";
import PatientTerm from '../PatientTerm/patientTerm';
import PatientService from "../../../../repository/repositoryPatient";

const Patients = () => {

    const [patients, setPatients] = useState([])

    const loadPatients = () => {
        PatientService.getPatients()
            .then((data) => {
                setPatients(data.data)
            })
    }

    useEffect(() => {
            loadPatients()
            document.body.style.backgroundColor = "#e9ecda"
        }, []
    )


    const onDeletePatient = () => {

    }

    const onEditPatient = () => {

    }

    return(
        <div>
            <div className={"container mm-4 mt-5"}>

                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12">
                        <a href={`/patients/add`} className="btn btn-block btn-dark add-product-btn">
                            Add new patient
                        </a>
                    </div>
                </div>


                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <tbody>
                            {patients.map((patient, index) => {
                                    return (
                                        <PatientTerm term={patient}  ownerId={1} num={index} onDelete={onDeletePatient} onEdit={onEditPatient}/>
                                    )
                            })}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Patients;