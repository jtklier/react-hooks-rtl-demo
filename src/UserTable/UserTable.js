import React, { useContext } from 'react';
import EditUserRow from './editUserRow/EditUserRow';
import { UserBeingEditedContext } from '../App';

const UserTable = ({ users, editUser, deleteUser }) => {
    const userBeingEdited = useContext(UserBeingEditedContext);
    return (
        <table data-testid="userTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => !userBeingEdited ? (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button
                                    aria-label={`edit-${user.name}-${user.id}`}
                                    onClick={() => editUser(user.id)}>Edit</button>
                                <button
                                    aria-label={`delete-${user.name}-${user.id}`}
                                    onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ) :
                        user.id === userBeingEdited ? (
                            <EditUserRow key={user.id} originalUser={user} />
                        ) : (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                </tr>
                            )
                    )
                ) : (
                        <tr>
                            <td colSpan={3}>No Users</td>
                        </tr>
                    )}
            </tbody>
        </table >
    )
}

UserTable.defaultProps = {
    users: [],
    editUser: () => { },
    deleteUser: () => { }
}

export default UserTable