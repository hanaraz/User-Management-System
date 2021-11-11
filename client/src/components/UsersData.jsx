import React from 'react';
import { useSelector } from 'react-redux';

const UsersData = () => {

    const usersData = useSelector(state => state.users);
    console.log(usersData);

    return (
        <div >
            <h1>Users</h1>

            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>

                </thead>
                {usersData.map(data => (
                    
                    <tbody key={data._id}>
                        <tr>
                            <td>{data._id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.gender}</td>
                            <td>
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>
                    </tbody>

                ))}


            </table>
        </div>
    )
}

export default UsersData;
