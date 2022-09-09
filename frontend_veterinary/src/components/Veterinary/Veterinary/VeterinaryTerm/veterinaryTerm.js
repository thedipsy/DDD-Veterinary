import React from "react";
import {Link} from "react-router-dom";

const veterinaryTerm = (props) => {

    return(
            <tr className="inner-box">
                <td>
                    <div className="event-wrap">
                        <h3><b><Link title={"Veterinary"} className={"link-class"} to={`/veterinary/${props.term.id.id}`}
                                     onClick={() => props.onAddVeterinarian(props.term.id.id)}>{props.term.name}</Link></b></h3>
                        <div className="meta">
                            <div className="time ms-3">
                                <span><b>{props.term.address.streetName} {props.term.address.houseNumber}, {props.term.address.city} {props.term.address.postalCode}</b></span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className={"text-right"}>
                    <Link title={"Veterinary"} className={"btn btn-outline-success m-2"} to={`/veterinary/${props.term.id.id}`}>View</Link>
                    <Link title={"Add Veterinarian"} className={"btn btn-outline-success m-2"} to={`/veterinary/${props.term.id.id}/veterinarian`}>Add Veterinarian</Link>
                    <Link title={"Edit"} className={"btn btn-outline-success m-2"} to={`/veterinary/edit/${props.term.id.id}`}>Edit</Link>
                    <a title={"Delete"} className={"btn btn-outline-danger m-2"} onClick={() => props.onDelete(props.term.id.id)}>Delete</a>
                </td>
            </tr>
    )
}

export default veterinaryTerm;