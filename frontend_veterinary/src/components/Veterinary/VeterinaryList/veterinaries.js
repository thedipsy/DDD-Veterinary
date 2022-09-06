import React from "react";
import VeterinaryTerm from '../VeterinaryTerm/veterinaryTerm';
import {Link} from "react-router-dom";
import VeterinaryService from "../../../repository/repositoryVeterinary";

class Veterinary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            veterinaries: []
        }
    }

    render() {
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

                                {this.state.veterinaries.map((term) => {
                                    return (
                                        <VeterinaryTerm term={term}
                                                        onDelete={this.props.onDelete}
                                                        onEdit={this.props.onEdit}
                                                        onAddVeterinarian={this.props.onAddVeterinarian}
                                                        onVeterinaryView={this.props.onVeterinaryView}/>
                                    )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    componentDidMount() {
        this.loadVeterinaries();
    }

    loadVeterinaries = () => {
        VeterinaryService.fetchVeterinaries()
            .then((data) => {
                this.setState({
                    veterinaries: data.data
                })
            })
    }

}

export default Veterinary