import React, { Component } from 'react';

export default class Login extends Component {
  render = () => <button className="login btn" onClick={this.props.onLogin}>Login</button>;
}
