import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeUser, updateUser } from '../redux/actions/users.js';


const User = ({data ,index ,setCurrentId}) => {
    
    let navigate = useNavigate();
    const  dispatch = useDispatch()


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
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.gender}</td>
                <td>
                    <button onClick={editUser}>edit</button>
                    <button onClick={deleteUser}>delete</button>
                </td>
            </tr>
    )
}

export default User;
