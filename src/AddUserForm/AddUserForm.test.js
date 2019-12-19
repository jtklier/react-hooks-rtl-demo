import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddUserForm from './AddUserForm';

test('renders add user button', () => {
  const { getByText } = render(<AddUserForm />);
  const addUserButtonElement = getByText(/add new user/i);
  expect(addUserButtonElement).toBeInTheDocument();
});

test('clicking add new user button clears out inputs', () => {
  const utils = render(<AddUserForm />);
  const addUserButton = utils.getByText(/add new user/i);
  const nameInput = utils.getByLabelText('name-input');
  const usernameInput = utils.getByLabelText('username-input');

  const name = 'Hank';
  const username = 'PropaneAccessories4u';

  fireEvent.change(nameInput, { target: { value: name } })
  fireEvent.change(usernameInput, { target: { value: username } })

  fireEvent.click(addUserButton);

  expect(nameInput.value).toBe('');
  expect(usernameInput.value).toBe('');
});