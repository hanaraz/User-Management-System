import { CREATE, DELETE, FETCH, UPDATE } from "../actions/actionTypes.js";

const usersReducer = (users = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;

        case CREATE:
            return [...users, action.payload];

        case DELETE:
            return users.filter(user => user._id !== action.payload);

        case UPDATE:
            return users.map(user => (user._id === action.payload._id) ? action.payload : user);

        default:
            return users;
    }
}

export default usersReducer;