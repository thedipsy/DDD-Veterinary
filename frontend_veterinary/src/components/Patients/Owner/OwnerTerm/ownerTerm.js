import React from "react";
import {Link} from "react-router-dom";

const OwnerTerm = (props) => {

    return(
        <tr className="inner-box">
            <td>
                <div className="event-wrap">
                    <h2><a className={"link-class-2"}>{props.term.name} {props.term.surname}</a></h2>
                    <div className="meta ms-2">
                        <div className="date">
                            <span>{props.term.phone}</span>
                        </div>
                        <div className="date">
                            <span>{props.term.email}</span>
                        </div>
                        <div className="time">
                            <span>{props.term.address.streetName} {props.term.address.houseNumber}, {props.term.address.city} {props.term.address.postalCode}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className={"text-right"}>
                <a title={"View"} className={"btn btn-success m-2"}  href={`/owner/${props.term.id.id}`} >View Owner</a>
                <a title={"Add Patient"} className={"btn btn-success m-2"} href={`/owner/${props.term.id.id}/patient/add`}>Add patient</a>
                <a title={"Delete"} className={"btn btn-success m-2"} onClick={() => props.onDelete(props.term.id.id)}>Delete Owner</a>
                <a title={"Edit"} className={"btn btn-success m-2"} href={`/owner/edit/${props.term.id.id}`}>Edit Owner</a>
            </td>
        </tr>
    )
}

export default OwnerTerm;