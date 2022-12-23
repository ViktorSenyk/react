import React, { Component } from 'react';
import UserForm from './UserForm';

export default class Profile extends Component {
  render = () => (
    <div className="column">
      <UserForm
        userData={this.props.userData}
        onChanger={this.props.onChanger}
      />
    </div>
  );
}
