import React from 'react';

const UserTable = ({ users, deleteUser }) => (
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
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button>Edit</button>
                            <button 
                                aria-label={`delete-${user.name}-${user.id}`}
                                onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No Users</td>
                    </tr>
                )}
        </tbody>
    </table>
)

UserTable.defaultProps = {
    users: [],
    deleteUser: () => {}
}

export default UserTable