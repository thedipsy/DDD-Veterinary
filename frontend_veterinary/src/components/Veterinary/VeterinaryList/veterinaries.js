import React from "react";
import VeterinaryTerm from '../VeterinaryTerm/veterinaryTerm';
import {Link} from "react-router-dom";

const veterinary = (props) => {
    return(
        <div>
            <div className={"container mm-4 mt-5"}>

                    <div className="row mb-5">
                        <div className="col-sm-12 col-md-12">
                            <Link to="/veterinary/add" className="btn btn-block btn-dark add-product-btn">
                                Add new veterinary
                            </Link>
                        </div>
                    </div>


                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <tbody>
                                {props.veterinaries.map((term) => {
                                    return (
                                        <VeterinaryTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit} onAddVeterinarian={props.onAddVeterinarian} onVeterinaryView={props.onVeterinaryView}/>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default veterinary