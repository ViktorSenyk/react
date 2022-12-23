import React, { Component } from 'react';

export default class UserProfile extends Component {
  render = () => (
    <div className="user">
      <img
        alt="User Avatar"
        src={this.props.userData.avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{this.props.userData.name}</span>
        <span className="user__location">{this.props.userData.location}</span>
      </div>
    </div>
  );
}
