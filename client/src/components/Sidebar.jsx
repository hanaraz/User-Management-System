import React from 'react';

const Sidebar = () => {
    return (
        <div className="side-bar">
        
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/form">Create User</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/users">Show Users</a>
                </li>
              
            </ul>
        </div>
    )
}

export default Sidebar;
