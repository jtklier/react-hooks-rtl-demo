import React from 'react';
import { render, fireEvent, waitForElementToBeRemoved, queryByText } from '@testing-library/react';
import UserTable from './UserTable';

test('renders actions table header', () => {
  const { getByText } = render(<UserTable />);
  const actionsHeaderElement = getByText(/actions/i);
  expect(actionsHeaderElement).toBeInTheDocument();
});

test('renders user Bob', () => {
    const users = [{id: 1, name: 'Bob', username: 'BurgerMan'}];
    const { getByText } = render(<UserTable users={users} />);
    const bobTextElement = getByText(/bob/i);
    expect(bobTextElement).toBeInTheDocument();
});

test('renders No Users by default', () => {
  const { getByText } = render(<UserTable />);
  const noUserTextElement = getByText(/no user/i);
  expect(noUserTextElement).toBeInTheDocument();
});

test('renders only Save action on specified user and no other actions for other users while a user is being edited', async () => {
  const users = [{id: 111, name: 'Sylvanas', username: 'BansheeQueen'}, {id: 33, name: 'Anduinn', username: 'BlessedLight'}];
  const userIdBeingEdited = users[1].id;
  const { getByText, queryByText } = render(<UserTable users={users} userBeingEdited={userIdBeingEdited} />);
  const saveButton = getByText(/save/i);

  expect(saveButton).toBeInTheDocument();
  const deleteButton = queryByText(/delete/i);
  expect(deleteButton).toBeNull();
});