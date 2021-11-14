import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../redux/actions/users';
import User from './User';

const Users = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch])



    const usersData = useSelector(state => state.users);
    console.log(usersData);

    return (
        <div>
            <h1>Users</h1>


            <table>
                {/* <thead>

                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>

                </thead> */}

                <tbody >
                    {usersData && usersData.map((data, index) => (
                        <User data={data} index={index} key={data._id} />
                    ))}
                </tbody>

            </table>

        </div>

    )
}

export default Users;
