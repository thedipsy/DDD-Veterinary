import React, {useEffect, useState} from "react";
import VeterinaryTerm from '../VeterinaryTerm/veterinaryTerm';
import {Link} from "react-router-dom";
import VeterinaryService from "../../../../repository/repositoryVeterinary";

const Veterinary = () => {

    const [veterinaries, setVeterinaries] = useState([])

    const loadVeterinaries = () => {
        VeterinaryService.fetchVeterinaries()
            .then(data => setVeterinaries(data.data))
    }

    const deleteVeterinary = (id) => {
        VeterinaryService.deleteVeterinary(id)
            .then(() => {
                loadVeterinaries()
            })
    }

    useEffect(() => {
            loadVeterinaries()
            document.body.style.backgroundColor = "#e9ecda"
        }, []
    )

    return(
        <div>
            <div className={"container mm-4 mt-5"}>

                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12">
                        <Link to="/veterinary/add" className="btn btn-block btn-dark add-product-btn">
                            Add a new veterinary
                        </Link>
                    </div>
                </div>


                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <tbody>
                                {veterinaries.map((term) => {
                                    return (
                                        <VeterinaryTerm term={term} onDelete={deleteVeterinary}/>
                                    )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Veterinary;