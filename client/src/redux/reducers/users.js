import { CREATE, DELETE, FETCH } from "../actions/actionTypes.js";

const usersReducer = (users = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;

        case CREATE:
            return [...users, action.payload];

        case DELETE:
            return users.filter(user => user._id !== action.payload);

        default:
            return users;
    }
}

export default usersReducer;