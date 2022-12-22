import React, { Component } from 'react';
import UserForm from './UserForm';

export default class App extends Component {
  createUser = (userObj) => console.log(userObj);

  render = () => (
    <>
      <UserForm onSubmit={this.createUser} />
    </>
  );
}
