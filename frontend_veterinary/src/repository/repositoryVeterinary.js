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

    addVeterinary: (name, streetName, houseNumber, city, postalCode) => {
        return axios.post("/veterinary", {
            "name" : name,
            "address" : {
                "streetName" : streetName,
                "houseNumber" : houseNumber,
                "city" : city,
                "postalCode" : postalCode
            }
        })
    },

    editVeterinary: (id, name, streetName, houseNumber, city, postalCode) => {
        return axios.put(`/veterinary/edit/${id}`, {
            "name" : name,
            "address" : {
                "streetName" : streetName,
                "houseNumber" : houseNumber,
                "city" : city,
                "postalCode" : postalCode
            }
        });
    },

    //end veterinary region


    //veterinarian region
    fetchVeterinarians: (id) => {
        return axios.get(`veterinary/${id}/veterinarians`)
    },

    getVeterinarian: (id) => {
        return axios.get(`veterinary/veterinarian/${id}`);
    },

    deleteVeterinarian: (id) => {
        return axios.delete(`veterinary/veterinarian/delete/${id}`)
    },

    addVeterinarian: (id, name, surname, email, phone, streetName, houseNumber, city, postalCode, dateOfEmployment) => {
        return axios.post(`veterinary/${id}/veterinarian/add`, {
            "name" : name,
            "surname" : surname,
            "email" : email,
            "phone" : phone,
            "address" : {
                "streetName" : streetName,
                "houseNumber" : houseNumber,
                "city" : city,
                "postalCode" : postalCode
            },
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