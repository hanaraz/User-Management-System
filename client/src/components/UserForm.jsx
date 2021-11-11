import React from 'react';

const UserForm = () => {
    return (
        <div>
            <h1>Create A User</h1>
            <form>
                <input type="text" placeholder="Your Name" /><br /><br />
                <input type="email" placeholder="Your Email" /><br /><br />
                <input type="text" placeholder="Your Phone" /><br /><br />

                <input type="radio" name="gender" value="male" />
                <label>Male</label>
                <input type="radio" name="gender" value="female" />
                <label>Female</label><br /><br />

                <button>CREATE</button>
            </form>

        </div>
    )
}

export default UserForm;
