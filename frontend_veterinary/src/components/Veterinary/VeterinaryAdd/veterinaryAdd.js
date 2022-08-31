import React from "react";
import {useNavigate} from "react-router-dom";

const VeterinaryAdd = (props) => {

    const navigate = useNavigate(); //da moze da redirektirame na nova pateka
    const [formData, updateFormData] = React.useState({
        name : "",
        streetName : "",
        houseNumber : "",
        city : "",
        postalCode : ""
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
        const address = formData.streetName;
        const houseNumber = formData.houseNumber;
        const city = formData.city;
        const postalCode = formData.postalCode;

        props.onAddVeterinary(name, address, houseNumber, city, postalCode);
        navigate('/veterinary'); //vrati me na veterinary
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <form onSubmit={onFormSubmit} className={"form m-4"}>

                        <div className="form-group m-2">
                            <label htmlFor="name">Vet Clinic name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   required
                                   placeholder="Enter veterinary name"
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">Street Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="streetName"
                                   name="streetName"
                                   required
                                   placeholder="Enter street name"
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">House Number</label>
                            <input type="text"
                                   className="form-control"
                                   id="houseNumber"
                                   name="houseNumber"
                                   required
                                   placeholder="Enter house number"
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">City</label>
                            <input type="text"
                                   className="form-control"
                                   id="city"
                                   name="city"
                                   required
                                   placeholder="Enter city"
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">Postal Code</label>
                            <input type="text"
                                   className="form-control"
                                   id="postalCode"
                                   name="postalCode"
                                   required
                                   placeholder="Enter city"
                                   onChange={handleChange}/>
                        </div>

                        <button id="submit" type="submit" className="btn btn-primary m-2">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default VeterinaryAdd;