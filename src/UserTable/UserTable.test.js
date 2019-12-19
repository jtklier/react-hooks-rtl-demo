import React from 'react';
import { render } from '@testing-library/react';
import UserTable from './UserTable';

test('renders actions table header', () => {
  const { getByText } = render(<UserTable />);
  const actionsHeaderElement = getByText(/actions/i);
  expect(actionsHeaderElement).toBeInTheDocument();
});