import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:9090',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-type': 'application/json'
    }
})

export default instance;
