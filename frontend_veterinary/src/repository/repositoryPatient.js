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

    getAnimalSpecies: () => {
        return axios.get(`owner/patients/animalSpecies`);
    },

    getWeightBaseUnits: () => {
        return axios.get(`owner/patients/weightUnits`);
    },

    getPatients: () => {
        return axios.get(`owner/patients`);
    },

    getPatient: (id, patientId) => {
        return axios.get(`owner/${id}/patient/${patientId}`);
    },

    deletePatient: (id, patientId) => {
        return axios.delete(`owner/${id}/patient/delete/${patientId}`)
    },

    addPatient: (id, name, birthDate, animalSpecie, breed, serialNumber, dateImplemented, amount, baseUnit, gender) => {
        return axios.post(`owner/${id}/patient`, {
            "name" : name,
            "birthDate" : birthDate,
            "animalSpecie" : animalSpecie,
            "breed" : breed,
            "microchip" : {
                "serialNumber" : serialNumber,
                "dateImplemented" : dateImplemented
            },
            "weight" : {
                "amount" : amount,
                "baseUnit" : baseUnit
            },
            "gender" : gender
        })
    },

    editPatient: (id, patientId, name, birthDate, animalSpecie, breed, microchip, weight, gender) => {
        return axios.put(`owner/${id}/patient/edit/${patientId}`, {
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