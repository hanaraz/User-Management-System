import React from 'react';

const Sidebar = () => {
    return (
        <div style={{float:"left" , minHeight:"100vh"}}>
            <a href="/">Home</a><br />
            <a href="/form">Create User</a><br />
            <a href="/users">Show Users</a><br />
        </div>
    )
}

export default Sidebar;
