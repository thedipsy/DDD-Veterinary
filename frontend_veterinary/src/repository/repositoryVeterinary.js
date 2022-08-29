import axios from "../custom-axios/axiosVeterinary";

const VeterinaryService = {

    //veterinary region
    fetchVeterinaries: () => {
        return axios.get("/veterinary")
    },

    getVeterinary: (id) => {
        return axios.get(`/veterinary/${id}`);
    },

    deleteVeterinary: (id) => {
        return axios.delete(`/veterinary/delete/${id}`)
    },

    addVeterinary: (name, address) => {
        return axios.post("/veterinary", {
            "name" : name,
            "address" : address
        })
    },

    editVeterinary: (id, name, address) => {
        return axios.put(`/veterinary/edit/${id}`, {
            "name" : name,
            "address" : address
        });
    },

    //end veterinary region


    //veterinarian region
    fetchVeterinarians: () => {
        return axios.get("veterinary/veterinarian")
    },

    getVeterinarian: (id) => {
        return axios.get(`veterinary/veterinarian/${id}`);
    },

    deleteVeterinarian: (id) => {
        return axios.delete(`veterinary/veterinarian/delete/${id}`)
    },

    addVeterinarian: (name, surname, email, phone, address, dateOfEmployment) => {
        return axios.post("veterinary/veterinarian/add", {
            "name" : name,
            "surname" : surname,
            "email" : email,
            "phone" : phone,
            "address" : address,
            "dateOfEmployment" : dateOfEmployment
        })
    },

    editVeterinarian: (id, name, surname, email, phone, address, dateOfEmployment) => {
        return axios.put(`veterinary/veterinarian/edit/${id}`, {
            "name" : name,
            "surname" : surname,
            "email" : email,
            "phone" : phone,
            "address" : address,
            "dateOfEmployment" : dateOfEmployment
        });
    }
    //end veterinarian region

}

export default VeterinaryService;