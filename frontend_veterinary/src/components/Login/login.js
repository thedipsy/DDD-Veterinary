import React from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginService from "../../repository/repositoryLogin";

const Login = () => {

    const navigate = useNavigate(); //da moze da redirektirame na nova pateka

    const [formData, updateFormData] = React.useState({
        email : "",
        password : ""
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

        const email = formData.email;
        const password = formData.password;

        login(email, password)

    }

    const login = (email, password) => {
        LoginService.login(email, password).then(resp => {
            localStorage.setItem("JWT", resp.data);
            navigate('/veterinary');
            window.location.reload(false);
        })
    }

    return (
        <div className="container bootstrap snippets bootdey">
            <div className="row login-page">
                <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
                    <img src="https://img.freepik.com/premium-vector/vet-examine-cartoon-veterinary-doctor-clinic-heals-cute-cats-dogs-hospital-domestic-animals-consulting-office-interior-vector-scene-with-puppy-kitten-healthcare-flat-illustration_176516-1890.jpg?w=2000" className="user-avatar img-thumbnail"/>
                        <form role="form" className="ng-pristine ng-valid">
                            <div className="form-content">
                                <div className="form-group">
                                    <input type="text" className="form-control input-underline input-lg"
                                           placeholder="Email" name={"email"} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control input-underline input-lg"
                                           placeholder="Password" name={"password"} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={onFormSubmit}>Sign in</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>

    )
}

export default Login;
