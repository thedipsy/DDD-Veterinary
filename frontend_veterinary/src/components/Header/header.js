import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {

    const history = useHistory();

    const logout = (e) =>{
        localStorage.removeItem("JWT");
        history.push(`/login`)
        window.location.reload(false);
    }

    let authenticate
    if (localStorage.getItem("JWT")) {
        authenticate = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item roboto-font">
                    <a className="nav-link" href={"/veterinary"}>Veterinary</a>
                </li>
                <li className="nav-item roboto-font">
                    <a className="nav-link" href={"/appointments"}>Appointments</a>
                </li>
                <li className="nav-item roboto-font">
                    <a className="nav-link" href={"/home"}>Patients</a>
                </li>
                <li className="nav-item roboto-font">
                    <button className={"btn btn-outline-info my-2 my-sm-0 me-0 "} onClick={logout}>Logout</button>
                </li>
            </ul>
        );
    }
    else {
        authenticate = (

            <ul className="navbar-nav ml-auto">
                <li className="nav-item roboto-font">
                    <a className={"btn btn-outline-info my-2 my-sm-0"} href={"/login"}>Login</a>
                </li>
            </ul>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed bg-dark">
            <div className="container">
                <a className={"navbar-brand roboto-font"}>Veterinary System</a>

                {authenticate}

            </div>
        </nav>
    )
}

export default Header;
