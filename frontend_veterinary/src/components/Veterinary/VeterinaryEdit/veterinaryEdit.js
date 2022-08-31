import React from "react";
import {useNavigate} from "react-router-dom";

const VeterinaryEdit = (props) => {

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

        const name = formData.name !== "" ? formData.name : props.veterinary.name;
        const streetName = formData.streetName !== "" ? formData.streetName : props.veterinary.address.streetName;
        const houseNumber = formData.houseNumber !== "" ? formData.houseNumber : props.veterinary.address.houseNumber;
        const city = formData.city !== "" ? formData.city : props.veterinary.address.city;
        const postalCode = formData.postalCode !== "" ? formData.postalCode : props.veterinary.address.postalCode;

        props.onEditVeterinary(props.veterinary.id.id, name, streetName, houseNumber, city, postalCode);
        navigate('/veterinary'); //vrati me na veterinary
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <form onSubmit={onFormSubmit}>

                        <div className="form-group">
                            <label htmlFor="name">Vet Clinic name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   placeholder={props.veterinary.name}
                                   onChange={handleChange}/>
                        </div>


                        <div className="form-group m-2">
                            <label htmlFor="name">Street Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="streetName"
                                   name="streetName"
                                   placeholder={props.veterinary.address.streetName}
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">House Number</label>
                            <input type="text"
                                   className="form-control"
                                   id="houseNumber"
                                   name="houseNumber"
                                   placeholder={props.veterinary.address.houseNumber}
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">City</label>
                            <input type="text"
                                   className="form-control"
                                   id="city"
                                   name="city"
                                   placeholder={props.veterinary.address.city}
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">Postal Code</label>
                            <input type="text"
                                   className="form-control"
                                   id="postalCode"
                                   name="postalCode"
                                   placeholder={props.veterinary.address.postalCode}
                                   onChange={handleChange}/>
                        </div>

                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </div>

    )

}

export default VeterinaryEdit;