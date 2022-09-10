import axios from "../custom-axios/axiosPatients"
const PatientService = {

    //owner region
    fetchOwners: () => {
        return axios.get("/owner")
    },

    getOwner: (id) => {
        return axios.get(`/owner/${id}`);
    },

    deleteOwner: (id) => {
        return axios.delete(`/owner/delete/${id}`)
    },

    addOwner: (name, surname, email, phone, streetName, houseNumber, city, postalCode) => {
        return axios.post("/owner", {
            "name" : name,
            "surname" : surname,
            "email" : email,
            "phone" : phone,
            "address" : {
                "streetName" : streetName,
                "houseNumber" : houseNumber,
                "city" : city,
                "postalCode" : postalCode
            }
        })
    },

    editOwner: (id, name, surname, email, phone, streetName, houseNumber, city, postalCode) => {
        return axios.put(`/owner/edit/${id}`, {
            "name" : name,
            "surname" : surname,
            "email" : email,
            "phone" : phone,
            "address" : {
                "streetName" : streetName,
                "houseNumber" : houseNumber,
                "city" : city,
                "postalCode" : postalCode
            }
        });
    },

    //end owner region


    //patient region
    fetchPatients: () => {
        return axios.get("owner/patient")
    },

    getPatient: (id) => {
        return axios.get(`owner/patient/${id}`);
    },

    deletePatient: (id) => {
        return axios.delete(`owner/patient/delete/${id}`)
    },

    addPatient: (name, birthDate, animalSpecie, breed, microchip, weight, gender) => {
        return axios.post("owner/patient/add", {
            "name" : name,
            "birthDate" : birthDate,
            "animalSpecie" : animalSpecie,
            "breed" : breed,
            "microchip" : microchip,
            "weight" : weight,
            "gender" : gender
        })
    },

    editPatient: (id, name, birthDate, animalSpecie, breed, microchip, weight, gender) => {
        return axios.put(`owner/patient/edit/${id}`, {
            "name" : name,
            "birthDate" : birthDate,
            "animalSpecie" : animalSpecie,
            "breed" : breed,
            "microchip" : microchip,
            "weight" : weight,
            "gender" : gender
        });
    }
    //end patient region

}

export default PatientService;