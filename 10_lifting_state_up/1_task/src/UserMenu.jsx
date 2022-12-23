import React, { Component } from 'react';

export default class UserMenu extends Component {
  render = () => (
    <div className="menu">
      <span className="menu__greeting">{`Hello, ${this.props.userData.name}`}</span>
      <img
        alt="User Avatar"
        src={this.props.userData.avatar_url}
        className="menu__avatar"
      />
    </div>
  );
}
