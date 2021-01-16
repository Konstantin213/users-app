import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://5ec252588ebdcc0016a59bfb.mockapi.io/`
})

export const usersAPI = {

    getUsers() {
        return instance.get(`Users`)
            .then(response => {
                return response.data;
            })
    },
    getSearchResult(value) {
        return instance.get(`Users?search=${value}`)
            .then(response => {
                return response.data;
            })
    },
    addUserRequest(formValues) {
        return instance.post(`Users`, formValues)
            .then(response => {
                return response.data.user;
            })
    },
    editUserRequest(editValue) {
        return instance.put(`Users/${editValue.id}`, editValue)
            .then(response => {
                return response.data;
            })
    },
    deleteUserRequest(id) {
        return instance.delete(`Users/${id}`)
    }
};
