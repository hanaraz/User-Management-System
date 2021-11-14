import React from 'react';

const User = ({data ,index}) => {
    return (
            <tr>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.gender}</td>
                <td>
                    <button>edit</button>
                    <button>delete</button>
                </td>
            </tr>

    )
}

export default User;
