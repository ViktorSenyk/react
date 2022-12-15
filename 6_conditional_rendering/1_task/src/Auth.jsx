import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  logoutFunc = () => this.setState({ isLoggedIn: false });
  loginFunc = () => this.setState({ isLoggedIn: true });

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.logoutFunc} />
        ) : (
          <Login onLogin={this.loginFunc} />
        )}
      </div>
    );
  }
}

export default Auth;
