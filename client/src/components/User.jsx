import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/actions/users.js';


const User = ({ data, index, setCurrentId }) => {

    let navigate = useNavigate();
    const dispatch = useDispatch()


    const deleteUser = () => {
        dispatch(removeUser(data._id))
        window.alert("user deleted succesfully");

    }

    const editUser = () => {
        setCurrentId(data._id);
        navigate("/form");

    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.gender}</td>
            <td>
                <button onClick={editUser} className="btn btn-dark btn-sm">Edit</button>
                <button onClick={deleteUser} className="btn btn-outline-dark btn-sm">Delete</button>
            </td>
        </tr>
    )
}

export default User;
