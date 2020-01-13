import React, {useState} from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';

function App() {

  const initialIdState = 1;
  const [id, setId] = useState(initialIdState);

  const initialUsersState = [];
  const [users, setUsers] = useState(initialUsersState);

  const initialUserIdBeingEdited = NaN;
  const [userBeingEdited, setUserIdToEdit] = useState(initialUserIdBeingEdited);

  const addUser = user => {
    user.id = id;
    setId(id+1);
    setUsers([...users, user]);
  }

  const deleteUser = id => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
  }

  const editUser = (userId) => {
    setUserIdToEdit(userId);
  }

  const saveUser = userToSave => {
    const editedUserIndex = users.findIndex(user => user.id === userToSave.id);
    const updatedUserList = users.slice(0, editedUserIndex).concat(userToSave).concat(users.slice(editedUserIndex+1));
    setUsers(updatedUserList);

    setUserIdToEdit(NaN);
  }

  return (
    <div className="App">
      <header className="App-header">
        CRUD App with Hooks
      </header>
      <section>
        <h2>Add User</h2>
        <AddUserForm addUser={addUser} />
      </section>
      <section>
        <h2>View Users</h2>
        <UserTable users={users} editUser={editUser} saveUser={saveUser} deleteUser={deleteUser} userBeingEdited={userBeingEdited} />
      </section>
    </div>
  );
}

export default App;
