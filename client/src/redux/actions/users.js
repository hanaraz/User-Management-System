import * as api from "../../api";
import { FETCH } from "./actionTypes.js";

export const getUserData = () => async(dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error);
    }
}