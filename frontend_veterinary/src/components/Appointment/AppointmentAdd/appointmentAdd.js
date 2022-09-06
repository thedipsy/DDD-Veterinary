import {useNavigate} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const AppointmentAdd = (props) => {

    const navigate = useNavigate(); //da moze da redirektirame na nova pateka
    const [formData, updateFormData] = React.useState({
        name: "",
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

        navigate('/appointents'); //vrati me na veterinary
    }

    return (

        <div className="container w-50">
            <form>

                <div className="row mb-3 mt-3">
                    <div className="col">
                        <input className="form-control" placeholder="First Name"/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Last Name"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Email Address"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Phone"/>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="Street Name"/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Building Number"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" placeholder="City"/>
                    </div>

                    <div className="col">
                        <input className="form-control" placeholder="Postal Code"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-lg btn-block w-100">Sign In</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
export default AppointmentAdd;