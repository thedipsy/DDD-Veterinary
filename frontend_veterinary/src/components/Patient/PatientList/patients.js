import React from "react";
import PatientTerm from '../PatientTerm/patientTerm';
import {Link} from "react-router-dom";

const patients = (props) => {
    return(
        <div>
            <div className={"container mm-4 mt-5"}>

                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12">
                        <Link to="/patients/add" className="btn btn-block btn-dark add-product-btn">
                            Add new patient
                        </Link>
                    </div>
                </div>


                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <tbody>
                            {props.patients.map((term) => {
                                return (
                                    <PatientTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit}/>
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

export default patients;