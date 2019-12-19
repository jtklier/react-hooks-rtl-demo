import React, {useState} from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';

function App() {

  const initialIdState = 1;
  const [id, setId] = useState(initialIdState);

  const initialUsersState = [];
  const [users, setUsers] = useState(initialUsersState);


  const addUser = user => {
    user.id = id;
    setId(id+1);
    setUsers([...users, user]);
  }

  const deleteUser = id => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
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
        <UserTable users={users} deleteUser={deleteUser} />
      </section>
    </div>
  );
}

export default App;
