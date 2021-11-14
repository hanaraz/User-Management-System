import axios from "axios";

const baseUrl = "http://localhost:5000/users";

export const fetchUsers = () => axios.get(baseUrl);

export const createUser = (data) => axios.post(baseUrl, data)

export const deleteUser = (id) => axios.delete(`${baseUrl}/${id}`);