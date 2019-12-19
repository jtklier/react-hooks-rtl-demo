import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/with hooks/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders user table', () => {
  const { getAllByText } = render(<App />);
  const usernameHeaderElement = getAllByText(/username/i)[0];
  expect(usernameHeaderElement).toBeInTheDocument();
});