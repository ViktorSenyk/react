import React, { Component } from 'react';
import UsersList from './UsersList';

export default class App extends Component {
  createUser = (userObj) => console.log(userObj);

  usersList = [
    { name: 'Tom', age: 23, id: 1 },
    { name: 'Bob', age: 27, id: 2 },
    { name: 'Din', age: 30, id: 3 },
    { name: 'Sam', age: 40, id: 4 },
    { name: 'John', age: 16, id: 5 },
  ];

  render = () => (
    <>
      <UsersList users={this.usersList} />
    </>
  );
}
