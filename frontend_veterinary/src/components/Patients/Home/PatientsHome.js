import {Link} from "react-router-dom";
import React, {useEffect} from "react";

const PatientsHome = () => {

    useEffect(() => {
            document.body.style.backgroundColor = "#e9ecda";
        }, []
    )

    return (
        <div className={"container w-75  mrg"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <tbody>
                        <tr className="inner-box">
                            <td>
                                <div className="event-wrap">
                                    <h1 className={"text-center m-3 mb-5"}><b><Link title={"Owners"} className={"link-class-3"} to={`/owners`}>Owners</Link></b></h1>
                                    <hr/>
                                    <br/>
                                    <h1 className={"text-center m-3"}><b><Link title={"Patients"} className={"link-class-3"} to={`/patients`}>Patients</Link></b></h1>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PatientsHome;