import * as api from "../../api";
import { CREATE, DELETE, FETCH } from "./actionTypes.js";

export const getUserData = () => async(dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const postUserData = (data) => async(dispatch) => {
    try {
        await api.createUser(data);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const removeUser = (id) => async(disatch) => {
    try {
        await api.deleteUser(id);
        disatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}