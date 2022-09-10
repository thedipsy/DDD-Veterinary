import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {

    const navigate = useNavigate();

    const logout = (e) =>{
        localStorage.removeItem("JWT");
        navigate('/login');
        window.location.reload(false);
    }

    let authenticate
    if (localStorage.getItem("JWT")) {
        authenticate = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/veterinary"}>Veterinary</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/appointments"}>Appointments</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/home"}>Patients</Link>
                </li>
                <li className="nav-item">
                    <button className={"btn btn-outline-info my-2 my-sm-0 me-0 "} onClick={logout}>Logout</button>
                </li>
            </ul>
        );
    }
    else {
        authenticate = (

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button className={"btn btn-outline-info my-2 my-sm-0"} to={"/login"}>Login</button>
                </li>
            </ul>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed bg-dark">
            <div className="container">
                <a className={"navbar-brand"}>Veterinary System</a>

                {authenticate}

            </div>
        </nav>
    )
}

export default Header;
