import React, { useState } from 'react';

const EditUserRow = ({ originalUser, saveUser }) => {
    const [user, setUser] = useState(originalUser);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleOnSubmit = event => {
        saveUser(user);
    }

    return (
        <tr>
            <td><label>Name</label>
                <input type="text" name="name" aria-label={`edit-${user.name}-${user.id}-input`} value={user.name} onChange={handleInputChange} />
            </td>
            <td>
                <label>Username</label>
                <input type="text" name="username" aria-label={`edit-${user.username}-${user.id}-input`} value={user.username} onChange={handleInputChange} />
            </td>
            <td>
                <button onClick={handleOnSubmit} aria-label={`save-${user.name}-${user.id}`}>Save</button>
            </td>
        </tr>
    )
}

EditUserRow.defaultProps = {
    originalUser: {},
    saveUser: () => { }
}

export default EditUserRow;