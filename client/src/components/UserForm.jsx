import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUserData } from "../redux/actions/users.js"

const initialState = {
    name: "",
    email: "",
    phone: "",
    gender: ""
}
const UserForm = () => {

    const  dispatch = useDispatch();
    const [user, setUser] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const addUser = (e) => {
        e.preventDefault();
        console.log(user);
        dispatch(postUserData(user));
        window.alert("user created succesfully");

    }

    return (
        <div>
            <h1>Create A User</h1>
            <form onSubmit={addUser}>
                <input onChange={handleChange} type="text" name="name" placeholder="Your Name" /><br /><br />
                <input onChange={handleChange} type="email" name="email" placeholder="Your Email" /><br /><br />
                <input onChange={handleChange} type="text" name="phone" placeholder="Your Phone" /><br /><br />

                <input onChange={handleChange} type="radio" name="gender" value="male" />
                <label>Male</label>
                <input onChange={handleChange} type="radio" name="gender" value="female" />
                <label>Female</label><br /><br />

                <button type="submit">CREATE</button>
            </form>

        </div>
    )
}

export default UserForm;
