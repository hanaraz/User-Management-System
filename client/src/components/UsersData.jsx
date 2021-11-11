import React from 'react';

const UsersData = () => {
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>email@gmail.com</td>
                        <td>0512451133</td>
                        <td>male</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UsersData;
