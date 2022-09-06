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

        <div className="container w-50">

            <div className={"row mb-3 mt-5"}>
                <h1 className="mt-2 mb-2 link-class text-center">
                    {props.veterinary.name}
                </h1>
            </div>

            <form onSubmit={onFormSubmit}>

                <div className="row mb-3 mt-5">
                    <div className="col">
                        <input className="form-control" placeholder="First Name"
                               name="name"
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Last Name"
                               name="surname"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Email Address"
                               name="email"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Phone"
                               name="phone"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Street Name"
                               name="streetName"
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Building Number"
                               name="houseNumber"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="City"
                               name="city"
                               required
                               onChange={handleChange}/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Postal Code"
                               name="postalCode"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" type={"date"}
                               name="dateOfEmployment"
                               required
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Add Employee</button>
                    </div>
                </div>

            </form>
        </div>

    )

}

export default VeterinarianAdd;