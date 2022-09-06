import React from "react";
import {Link} from "react-router-dom";

const patientTerm = (props) => {

    return(
        <tr className="inner-box">
            <th scope="row">
                <div className="event-date">
                    <span>1</span>
                </div>
            </th>
            <td>
                <div className="event-wrap">
                    <h3><b><Link title={"Patient"} className={"link-class"} to={`/patients/${props.term.id.id}`}>{props.term.name}</Link></b></h3>
                    <div className="meta">
                        <div className="time">
                            <span><b>{props.term.gender} | {props.term.animalSpecie} | {props.term.breed}</b></span>
                        </div>
                    </div>
                </div>
            </td>
            <td className={"text-right"}>
                <Link title={"Edit"} className={"btn btn-outline-primary m-2"} to={`/patients/edit/${props.term.id.id}`}
                      onClick={() => props.onEdit(props.term.id.id)}>Edit
                </Link>
                <a title={"Delete"} className={"btn btn-outline-danger m-2"}
                   onClick={() => props.onDelete(props.term.id.id)}>Delete
                </a>

            </td>
        </tr>
    )

}

export default patientTerm;