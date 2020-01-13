import React from 'react';
import { render } from '@testing-library/react';
import EditUserRow from './EditUserRow';

test('renders save button', () => {
    const { getByText } = render(<EditUserRow />);
    const saveButton = getByText(/save/i);
    expect(saveButton).toBeInTheDocument();
  });