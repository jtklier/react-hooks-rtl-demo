import React, { Component } from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      users: []
    }
    this.addUser = this.addUser.bind(this)
  }

  addUser(user) {
    user.id = this.state.id;
    this.setState({ id: this.state.id + 1, users: [...this.state.users, user] });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          CRUD App with Hooks
      </header>
        <section>
          <h2>Add User</h2>
          <AddUserForm addUser={this.addUser} />
        </section>
        <section>
          <h2>View Users</h2>
          <UserTable users={this.state.users} />
        </section>
      </div>
    )
  };
}

export default App;
