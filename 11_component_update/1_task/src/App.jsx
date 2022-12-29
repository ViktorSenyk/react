import React, { Component } from 'react';
import EvenNumbers from './EvenNumbers';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';

export default class App extends Component {
  state = {
    title: 'All numbers',
    number: 0,
  };

  componentDidMount = () =>
    (this.intervalId = setInterval(
      () => this.setState({ number: this.state.number + 1 }),
      1000
    ));
  componentWillUnmount = () => clearInterval(this.intervalId);

  render = () => (
    <>
      <Numbers title={this.state.title} number={this.state.number} />
      <EvenNumbers number={this.state.number} />
      <OddNumbers number={this.state.number} />
    </>
  );
}
