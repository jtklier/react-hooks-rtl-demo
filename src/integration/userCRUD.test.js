import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

const setup = () => {
    const utils = render(<App />);
    const addUserButton = utils.getByText(/add new user/i);
    const nameInput = utils.getByLabelText('name-input');
    const usernameInput = utils.getByLabelText('username-input');
    return {
        addUserButton,
        nameInput,
        usernameInput,
        ...utils,
    }
  }

test('User Table displays newly added users', () => {
    const {addUserButton, nameInput, usernameInput, getByText} = setup();
    const name = 'Mario';
    const username = 'RunningPlumber83';

    fireEvent.change(nameInput, {target: { value: name } })
    fireEvent.change(usernameInput, {target: { value: username } })

    expect(nameInput.value).toBe(name);
    expect(usernameInput.value).toBe(username);

    fireEvent.click(addUserButton);

    expect(getByText(username)).toBeInTheDocument();
});

test('clicking delete on Joe removes them from the table', () => {
    const {addUserButton, nameInput, usernameInput, getByText, getByLabelText} = setup();
    const user = {id: 1, name: 'Joe', username: 'Schmoe'};
    
    fireEvent.change(nameInput, {target: { value: user.name } })
    fireEvent.change(usernameInput, {target: { value: user.username } })

    fireEvent.click(addUserButton);

    const joeDeleteButtonElement = getByLabelText(`delete-${user.name}-${user.id}`);

    fireEvent.click(joeDeleteButtonElement);
  
    expect(getByText(/no user/i)).toBeInTheDocument();
  });

  test('editing username for Henry and saving properly updates the table', async () => {
    const {addUserButton, nameInput, usernameInput, getByText, getByLabelText} = setup();
    const user = {id: 1, name: 'Henry', username: 'Ford'};
    const differentUsername = 'MustangMan63';
    
    fireEvent.change(nameInput, {target: { value: user.name } })
    fireEvent.change(usernameInput, {target: { value: user.username } })

    fireEvent.click(addUserButton);

    const henryEditButtonElement = getByLabelText(`edit-${user.name}-${user.id}`);

    fireEvent.click(henryEditButtonElement);

    const henryEditUsernameInput = getByLabelText(`edit-${user.username}-${user.id}-input`);

    fireEvent.change(henryEditUsernameInput, { target: { value: differentUsername }});
  
    const henrySaveButtonElement = getByLabelText(`save-${user.name}-${user.id}`);

    fireEvent.click(henrySaveButtonElement);

    expect(henryEditUsernameInput).not.toBeInTheDocument();
    expect(getByText(differentUsername)).toBeInTheDocument();
  });