import React from "react";
import {Link} from "react-router-dom";
import VeterinarianTerm from "../VeterinarianTerm/veterinarianTerm";

const VeterinaryView = (props) => {
    return(
        <div>
            <div className="tab-content m-5" id="myTabContent">
                <div className="tab-pane fade active show" id="home" role="tabpanel">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="text-center" scope="col">#</th>
                                <th scope="col">Employee</th>

                            </tr>
                            </thead>
                            <tbody>
                                {props.veterinary.veterinarians.map((term) => {
                                    return (
                                        <VeterinarianTerm term={term} onDeleteVeterinarian={props.onDeleteVeterinarian} onEditVeterinarian={props.onEditVeterinarian}/>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <a title={"Delete"} className={"btn btn-danger m-2"}
                       onClick={() => props.onDelete(props.veterinary.id.id)}>Delete
                    </a>
                    <Link title={"Edit"} className={"btn btn-danger m-2"} to={`/veterinary/edit/${props.veterinary.id.id}`}
                          onClick={() => props.onEdit(props.veterinary.id.id)}>Edit
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default VeterinaryView;