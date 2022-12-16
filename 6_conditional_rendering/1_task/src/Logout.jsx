import React, { Component } from 'react';

export default class Logout extends Component {
  render = () => (
    <button className="logout btn" onClick={this.props.onLogout}>
      Logout
    </button>
  );
}
