import React, { Component } from 'react';
import UserForm from './UserForm';

export default class App extends Component {
  createUser = (e, userObj) => {
    e.preventDefault();
    console.log(userObj);
  };

  render = () => (
    <>
      <UserForm onSubmit={this.createUser} />
    </>
  );
}
