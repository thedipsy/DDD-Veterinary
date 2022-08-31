import React from "react";
import VeterinaryTerm from '../VeterinaryTerm/veterinaryTerm';
import {Link} from "react-router-dom";

const veterinary = (props) => {
    return(
        <div>
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>

                            <thead>
                            <tr>
                                <th scope={"col"}>Veterinary</th>
                                <th scope={"col"}>Address</th>
                                <th scope={"col"}/>
                            </tr>
                            </thead>

                            <tbody>
                                {props.veterinary.map((term) => {
                                    return (
                                        <VeterinaryTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit} />
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>

                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link to="/veterinary/add" className="btn btn-block btn-dark add-product-btn">
                                    Add new veterinary
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default veterinary