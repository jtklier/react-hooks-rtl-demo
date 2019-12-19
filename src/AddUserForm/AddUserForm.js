import React, {useState} from 'react';

const AddUserForm = () => {
    const initialState = {id: null, name: '', username: ''};
    const [user, setUser] = useState(initialState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        setUser(initialState);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Name</label>
            <input type="text" name="name" aria-label="name-input" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" aria-label="username-input" value={user.username} onChange={handleInputChange} />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm;