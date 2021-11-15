import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../redux/actions/users';
import User from './User';

const Users = ({ setCurrentId }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch])

    const usersData = useSelector(state => state.users);

    return (
        <div className="container">
            <div className="row">
                <div className="col">


                        <table className="table table-sm table-condensed">
                            <thead>
                                <tr>
                                    <th scope="col" >#</th>
                                    <th scope="col" >Name</th>
                                    <th scope="col" >Email</th>
                                    <th scope="col" >Phone</th>
                                    <th scope="col"  >Gender</th>
                                    <th scope="col"  >Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {usersData && usersData.map((data, index) => (
                                    <User setCurrentId={setCurrentId} data={data} index={index} key={data._id} />
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Users;
