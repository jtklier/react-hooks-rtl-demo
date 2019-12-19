import React from 'react';
import { render } from '@testing-library/react';
import AddUserForm from './AddUserForm';

test('renders add user button', () => {
  const { getByText } = render(<AddUserForm />);
  const addUserButtonElement = getByText(/add new user/i);
  expect(addUserButtonElement).toBeInTheDocument();
});
