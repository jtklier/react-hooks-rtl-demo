import React from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        CRUD App with Hooks
      </header>
      <section>
        <h2>Add User</h2>
        <AddUserForm />
      </section>
      <section>
        <h2>View Users</h2>
        <UserTable />
      </section>
    </div>
  );
}

export default App;
