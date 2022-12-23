import React, { Component } from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

export default class App extends Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Due',
    },
  };

  onChanger = (e) =>
    this.setState({
      userData: {
        ...this.state.userData,
        [e.target.name]: e.target.value,
      },
    });

  render = () => (
    <div className="page">
      <h1 className="title">{`Hello, ${this.state.userData.firstName} ${this.state.userData.lastName}`}</h1>
      <main className="content">
        <ShoppingCart userName={this.state.userData.firstName} />
        <Profile userData={this.state.userData} onChanger={this.onChanger} />
      </main>
    </div>
  );
}
