import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData, updateUser } from "../redux/actions/users.js";
import { useLocation } from 'react-router';

const initialState = {
    name: "",
    email: "",
    phone: "",
    gender: ""
}
const UserForm = ({ currentId, setCurrentId }) => {

    const dispatch = useDispatch();
    const [user, setUser] = useState(initialState);
    const currentUser = useSelector(state => currentId ? state.users.find(u => u._id === currentId) : null);

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user,[name]: value})
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateUser(currentId, user));
            window.alert("user updated succesfully");
        } else {
            dispatch(postUserData(user));
            window.alert("user created succesfully");
        }
        clear();

    }

    const clear = () => {
        setUser(initialState);
        setCurrentId(null);
    }

    return (
        <div>
            <h1>{currentId ? 'Update' : 'Create'} User</h1>
            <form onSubmit={handleClick}>
                <input value={user.name} onChange={handleChange} type="text" name="name" placeholder="Your Name" /><br /><br />
                <input value={user.email} onChange={handleChange} type="email" name="email" placeholder="Your Email" /><br /><br />
                <input value={user.phone} onChange={handleChange} type="text" name="phone" placeholder="Your Phone" /><br /><br />

                <input onChange={handleChange} type="radio" name="gender" value="male" />
                <label>Male</label>
                <input onChange={handleChange} type="radio" name="gender" value="female" />
                <label>Female</label><br /><br />
                {currentId && <button onClick={clear} type="submit">Cancel</button>}&nbsp;

                <button type="submit">{currentId ? 'Update' : 'Create'}</button>
            </form>

        </div>
    )
}

export default UserForm;
