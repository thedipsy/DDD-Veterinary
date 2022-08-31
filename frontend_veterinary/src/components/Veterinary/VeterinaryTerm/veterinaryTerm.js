import React from "react";
import {Link} from "react-router-dom";

const veterinaryTerm = (props) => {

    return(
        <tr>
            <td className={"m-2"}>{props.term.name}</td>
            <td className={"m-2"}>{props.term.address.streetName} {props.term.address.houseNumber} {props.term.address.city} {props.term.address.postalCode} </td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger m-2"}
                   onClick={() => props.onDelete(props.term.id.id)}>Delete
                </a>
                <Link title={"Edit"} className={"btn btn-danger m-2"} to={`/veterinary/edit/${props.term.id.id}`}
                      onClick={() => props.onEdit(props.term.id.id)}>Edit
                </Link>
            </td>
        </tr>
    )

}

export default veterinaryTerm;