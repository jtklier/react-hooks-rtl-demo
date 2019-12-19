import React from 'react';

const AddUserForm = () => {
    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" aria-label="name-input"  />
            <label>Username</label>
            <input type="text" name="username" aria-label="username-input"  />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm;