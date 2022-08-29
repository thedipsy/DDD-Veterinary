import axios from "../custom-axios/axiosPatients"
const PatientService = {

    //owner region
    fetchOwners: () => {
        return axios.get("/owner")
    },

    getVeterinary: (id) => {
        return axios.get(`/owner/${id}`);
    },

    deleteVeterinary: (id) => {
        return axios.delete(`/owner/delete/${id}`)
    },

    addVeterinary: (name, address) => {
        return axios.post("/owner", {
            "name" : name,
            "address" : address
        })
    },

    editVeterinary: (id, name, address) => {
        return axios.put(`/owner/edit/${id}`, {
            "name" : name,
            "address" : address
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