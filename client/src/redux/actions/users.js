import * as api from "../../api";
import { FETCH } from "./actionTypes";

export const getUserData = () => async(dispatch) => {
    const { data } = await api.fetchUsers();
    dispatch({ type: FETCH, payload: data });
}