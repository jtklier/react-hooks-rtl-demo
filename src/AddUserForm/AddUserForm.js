import React, { useState, Component } from 'react';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: null,
                name: '',
                username: ''
            }
        }

        this.addUser = props.addUser.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ user: {...this.state.user, [name]: value }});
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.addUser(this.state.user);
        this.setState({user: { id: null, name: '', username: '' }});
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Name</label>
                <input type="text" name="name" aria-label="name-input" value={this.state.user.name} onChange={this.handleInputChange} />
                <label>Username</label>
                <input type="text" name="username" aria-label="username-input" value={this.state.user.username} onChange={this.handleInputChange} />
                <button>Add new user</button>
            </form>
        )
    }
}

AddUserForm.defaultProps = {
    addUser: () => { }
}

export default AddUserForm;