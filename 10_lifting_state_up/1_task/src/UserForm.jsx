import React, { Component } from 'react';

export default class UserForm extends Component {
  render = () => (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={this.props.userData.firstName}
        onChange={this.props.onChanger}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={this.props.userData.lastName}
        onChange={this.props.onChanger}
      />
    </form>
  );
}
