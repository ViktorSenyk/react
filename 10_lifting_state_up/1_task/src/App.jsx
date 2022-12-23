import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

export default class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount = () => this.getUserInfo();

  getUserInfo = () =>
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((response) => response.json())
      .then((data) => this.setState({ userData: data }));

  render = () =>
    !this.state.userData ? null : (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
}
