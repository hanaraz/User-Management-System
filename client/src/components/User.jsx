import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/actions/users.js';

const User = ({data ,index}) => {

    const  dispatch = useDispatch()

    const deleteUser = () => {
        dispatch(removeUser(data._id))
        window.alert("user deleted succesfully");

    }
    return (
            <tr>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.gender}</td>
                <td>
                    <button>edit</button>
                    <button onClick={deleteUser}>delete</button>
                </td>
            </tr>

    )
}

export default User;
