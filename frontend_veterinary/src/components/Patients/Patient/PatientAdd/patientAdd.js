import {useNavigate} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const PatientAdd = (props) => {

    const navigate = useNavigate(); //da moze da redirektirame na nova pateka
    const [formData, updateFormData] = React.useState({
        name: "",
        birthDate: "",
        animalSpecie: "",
        breed: "",
        microchip: "",
        weight: "",
        gender: ""
    });

    //e event koj se kreira on change
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };

    const onFormSubmit = (e) => {
        e.preventDefault(); //ne gi prakjaj vednas podatocite kako post request tuku napravi go slednoto podolu

        const name = formData.name;
        const animalSpecie = formData.animalSpecie;
        const breed = formData.breed;
        const microchip = formData.microchip;
        const weight = formData.weight;
        const birthDate = formData.birthDate;
        const gender = formData.gender;

        props.onAddPatient(name, birthDate, animalSpecie, breed, microchip, weight, gender);
        navigate('/patients'); //vrati me na patients
    }

    return (

        <div className="container w-50">

            <div className={"row mb-3 mt-5"}>
                <h5 className="margin-bottom-md green-text mt-2 text-center">
                    Add a new patient
                </h5>
            </div>

            <form onSubmit={onFormSubmit}>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Name" name={"name"}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Animal Specie" name={"animalSpecie"}/>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Animal Specie" name={"animalSpecie"}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Breed" name={"breed"}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Microchip" name={"microchip"}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Birth Date" name={"birthDate"} type={"date"}/>
                    </div>

                    <div className="col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender"
                                   value="male"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender"
                                   value="female"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <button type="button" className="btn btn-success btn-lg btn-block w-100">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
export default PatientAdd;