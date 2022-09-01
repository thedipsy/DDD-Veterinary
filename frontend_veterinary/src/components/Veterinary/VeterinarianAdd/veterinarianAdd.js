import React from "react";
import {useNavigate} from "react-router-dom";

const VeterinarianAdd = (props) => {

    const navigate = useNavigate(); //da moze da redirektirame na nova pateka
    const [formData, updateFormData] = React.useState({
        name : "",
        surname : "",
        email : "",
        phone : "",
        streetName : "",
        houseNumber : "",
        city : "",
        postalCode : "",
        dateOfEmployment: ""
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
        const surname = formData.surname;
        const email = formData.email;
        const phone = formData.phone;
        const streetName = formData.streetName;
        const houseNumber = formData.houseNumber;
        const city = formData.city;
        const postalCode = formData.postalCode;
        const dateOfEmployment = formData.dateOfEmployment;
        //fali veterinary id
        props.onAddVeterinarian(props.veterinary.id.id, name, surname, email, phone, streetName, houseNumber, city, postalCode, dateOfEmployment);
        navigate('/veterinary'); //vrati me na veterinary
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="secure text-center margin-bottom-md">
                        <h1 className="mt-5 link-class">
                            {props.veterinary.name}
                        </h1>
                        <h4 className="margin-bottom-md text-primary mb-4">
                            Add veterinarian
                        </h4>
                    </div>

                    <form onSubmit={onFormSubmit} className={"form m-4"}>

                        <div className="form-group m-2">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   required
                                   placeholder="Enter name"
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">Surname</label>
                            <input type="text"
                                   className="form-control"
                                   id="surname"
                                   name="surname"
                                   required
                                   placeholder="Enter surname"
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">Phone</label>
                            <input type="text"
                                   className="form-control"
                                   id="phone"
                                   name="phone"
                                   required
                                   placeholder="Enter phone"
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="name">Email</label>
                            <input type="text"
                                   className="form-control"
                                   id="email"
                                   name="email"
                                   required
                                   placeholder="Enter email"
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

                        <div className="form-group m-2">
                            <label htmlFor="name">Date of employment</label>
                            <input type="date"
                                   className="form-control"
                                   id="dateOfEmployment"
                                   name="dateOfEmployment"
                                   required
                                   placeholder="Enter date of employment"
                                   onChange={handleChange}/>
                        </div>

                        <button id="submit" type="submit" className="btn btn-primary m-2">Add employee</button>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default VeterinarianAdd;