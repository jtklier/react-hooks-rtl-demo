import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/with hooks/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders user table', () => {
  const { getByTestId } = render(<App />);
  const usernameHeaderElement = getByTestId('userTable');
  expect(usernameHeaderElement).toBeInTheDocument();
});

test('renders add user form', () => {
  const { getByLabelText } = render(<App />);
  const addUserInputElement = getByLabelText('username-input');
  expect(addUserInputElement).toBeInTheDocument();
});