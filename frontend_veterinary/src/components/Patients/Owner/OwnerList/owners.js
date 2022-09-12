import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PatientService from "../../../../repository/repositoryPatient";
import OwnerTerm from "../OwnerTerm/ownerTerm";

const Owners = () => {

    const [owners, setOwners] = useState([])

    const loadOwners = () => {
        PatientService.fetchOwners()
            .then(data => setOwners(data.data))
    }

    const deleteOwner = (id) => {
        PatientService.deleteOwner(id)
            .then(() => {
                loadOwners()
            })
    }

    useEffect(() => {
            loadOwners()
            document.body.style.backgroundColor = "#e9ecda"
        }, []
    )

    return(
        <div>
            <div className={"container mm-4 mt-5"}>

                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12">
                        <a href="/owners/add" className="btn btn-block btn-dark add-product-btn">
                            Add a new owner
                        </a>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <tbody>
                            {owners.length === 0 ?
                                <h4 className={"m-3 text-black-50"}>No owners.</h4> :
                                owners.map((term) => {
                                return (
                                    <OwnerTerm term={term} onDelete={deleteOwner}/>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Owners;