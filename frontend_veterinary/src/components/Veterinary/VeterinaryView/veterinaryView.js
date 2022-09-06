import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import VeterinarianTerm from "../VeterinarianTerm/veterinarianTerm";
import VeterinaryService from "../../../repository/repositoryVeterinary";

const VeterinaryView = (props) => {

    let id
    let veterinarians
    if(props.veterinary !== undefined && props.veterinary.veterinarians !== undefined){
        veterinarians = props.veterinary.veterinarians
        id = props.veterinary.id.id
    } else {
        veterinarians = []
        id={}
    }

    return(
        <div>
            <div className="tab-content m-5" id="myTabContent">
                <div className="tab-pane fade active show" id="home" role="tabpanel">
                    <div className="table-responsive">

                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Employee</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                                {veterinarians.map((term) => {
                                    return (
                                        <VeterinarianTerm term={term} onDeleteVeterinarian={props.onDeleteVeterinarian} onEditVeterinarian={props.onEditVeterinarian}/>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <Link title={"Delete"} className={"btn btn-danger m-2"} to={"/veterinary"}
                       onClick={() => props.onDelete({id})}>Delete
                    </Link>
                    <Link title={"Edit"} className={"btn btn-danger m-2"} to={`/veterinary/edit/${id}`}
                          onClick={() => props.onEdit({id})}>Edit
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default VeterinaryView;