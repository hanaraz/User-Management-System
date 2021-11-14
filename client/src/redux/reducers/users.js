import { FETCH } from "../actions/actionTypes.js";

const usersReducer = (users = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;

        default:
            return users;
    }
}

export default usersReducer;