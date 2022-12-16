import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

export default class Auth extends Component {
  state = {
    isOnline: false,
    isLoading: true,
  };

  setLogin = () => {
    this.setState({ isOnline: true });
    this.setLoading();
  };

  setLogout = () => this.setState({ isOnline: false, isLoading: true });

  setLoading = () =>
    setTimeout(() => this.setState({ isLoading: false }), 2000);

  render = () =>
    !this.state.isOnline ? (
      <Login onLogin={this.setLogin} />
    ) : (
      <>
        {this.state.isLoading ? (
          <Spinner width="30px" height="30px" />
        ) : (
          <Logout onLogout={this.setLogout} />
        )}
      </>
    );
}
