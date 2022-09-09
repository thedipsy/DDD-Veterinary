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

    let home
    let authenticate
    if (localStorage.getItem("JWT")) {
        home = "/patients"
        authenticate = (
            <div className={"collapse navbar-collapse"} id="navbarCollapse">
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item active"}>
                        <Link className="nav-link" to={"/veterinary"}>Veterinary</Link>
                    </li>
                    <li className={"nav-item active"}>
                        <Link className="nav-link" to={"/appointments"}>Appointments</Link>
                    </li>
                    <li className={"nav-item active"}>
                        <Link className="nav-link" to={"/patients"}>Patients</Link>
                    </li>
                </ul>
                <form className={"form-inline mt-2 mt-md-0 ml-3 me-0"}>
                    <button className={"btn btn-outline-info my-2 my-sm-0 me-0"} onClick={logout}>Logout</button>
                </form>
            </div>);
    } else {
        home = ("/login")
        authenticate = (
            <div className={"collapse navbar-collapse"} id="navbarCollapse">
                <form className={"form-inline mt-2 mt-md-0 ml-3 me-0"}>
                    <Link className={"btn btn-outline-info my-2 my-sm-0"} to={"/login"}>Login</Link>
                </form>
            </div>);
    }

    return (
        <header>
            <nav className={"navbar navbar-expand-md navbar-dark navbar-fixed bg-dark roboto-font"}>
                <a className={"navbar-brand ms-5 me-5"}>Veterinary System</a>
                <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                {authenticate}
            </nav>
        </header>

    )
}

export default Header;
