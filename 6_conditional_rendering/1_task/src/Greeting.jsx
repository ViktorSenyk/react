import React, { Component } from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

class Greeting extends Component {
  render() {
    return this.props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
  }
}

export default Greeting;
