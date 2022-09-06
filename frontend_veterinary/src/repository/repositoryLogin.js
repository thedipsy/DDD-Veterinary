import axios from "../custom-axios/axiosVeterinary";

const LoginService = {

    login: (email, password) => {
        return axios.post("/veterinary/login", {
            "username": email,
            "password": password
        });
    }

}
export default LoginService;