import React, { Component } from 'react';

export default class User extends Component {
  render = () => (
    <li className="user">
      <span className="user__name">{this.props.name}</span>
      <span className="user__age">{this.props.age}</span>
    </li>
  );
}
