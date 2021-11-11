import { FETCH } from "../actions/actionTypes";

const usersReducer = (users = [], action) => {
    switch (action.type) {
        case FETCH:
            return [...users, action.payload];

        default:
            return users;
    }
}

export default usersReducer;