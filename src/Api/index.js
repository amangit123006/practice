import axios from 'axios';
const apiBasePath = `https://reqres.in/api`;


export const loginService = (data) => {
    return axios.post(`${apiBasePath}/login`, data)

}


export const getUsersData = (page) => {
    return axios.get(`${apiBasePath}/users?page=${page}`)

}

export const getUserDataById = (id) => {
    return axios.get(`${apiBasePath}/users/${id}`)

}