import axios from "../custom-axios/axiosAppointment";

const AppointmentService = {

    //owner region
    fetchAppointments: () => {
        return axios.get("/appointment")
    },

    getAppointment: (id) => {
        return axios.get(`/owner/${id}`);
    },

    bookAppointment: () => {
        return axios.post("/appointment/book")
    },

    deleteAppointment: (id) => {
        return axios.delete(`/appointment/delete/${id}`)
    },

    editAppointment: (id) => {
        return axios.put(`/appointment/${id}`);
    }

}

export default AppointmentService;