import React, {useEffect, useState} from "react";
import PatientService from "../../../../repository/repositoryPatient";
import {Link, useParams} from "react-router-dom";
import PatientTerm from "../../Patient/PatientTerm/patientTerm";

const OwnerView = () => {

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
        },
        animalsList : []
    })

    const getOwner = (id) => {
        PatientService.getOwner(id)
            .then(data => {
                    setOwner(data.data)
                })
    }

    const deleteOwner = (id) => {
        PatientService.deleteOwner(id)
            .then(() => {
                getOwner(id)
            })
    }

    useEffect(() => {
        getOwner(id)
            document.body.style.backgroundColor = "#e9ecda"
        }, []
    )

    return(
        <div>
            <div className={"container mm-4 mt-5"}>

                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12">
                        <a href={`/owner/${id}/patient/add`} className="btn btn-block btn-dark add-product-btn">
                            Add a patient
                        </a>
                    </div>
                </div>


                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope="col" className={"roboto-font"}>Owner</th>
                                <th scope="col"/>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="inner-box">
                                <td>
                                    <div className="event-wrap">
                                        <h2><a className={"link-class-2"}>{owner.name} {owner.surname}</a></h2>
                                        <div className="meta ms-2">
                                            <div className="date">
                                                <span>{owner.phone}</span>
                                            </div>
                                            <div className="date">
                                                <span>{owner.email}</span>
                                            </div>
                                            <div className="time">
                                                <span>{owner.address.streetName} {owner.address.houseNumber}, {owner.address.city} {owner.address.postalCode}</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={"text-right"}>
                                    <a title={"Edit"} className={"btn btn-success m-2"} href={`/owner/edit/${id}`}>Edit Owner</a>
                                    <a title={"Delete"} className={"btn btn-success m-2"} onClick={() => deleteOwner(id)}>Delete Owner</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope="col" className={"roboto-font"}>Patients</th>
                                <th scope="col"/>
                                <th scope="col"/>
                            </tr>
                            </thead>
                            <tbody>
                                {owner.animalsList.length === 0 ?
                                    <tr>
                                        <td className={"m-3 text-black-50"}>No patients.</td>
                                        <td/>
                                        <td/>
                                    </tr> :
                                    owner.animalsList.map((term, index) => {
                                        return (
                                            <PatientTerm term={term} ownerId={id} num={index} onDelete={deleteOwner}/>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerView;