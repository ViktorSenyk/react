import React, { Component } from 'react';
import UsersList from './UsersList';
import users from './users';

export default class App extends Component {
  render = () => (
    <>
      <UsersList users={users} />
    </>
  );
}
