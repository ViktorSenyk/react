import React, { Component } from 'react';
import Clock from './Clock';

export default class App extends Component {
  state = {
    clockBoolean: false,
  };

  setClockBoolean = () =>
    this.setState({ clockBoolean: !this.state.clockBoolean });

  render = () => (
    <>
      <button onClick={this.setClockBoolean}>Toggle</button>
      {this.state.clockBoolean && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New Yerk" offset={-5} />
        </>
      )}
    </>
  );
}
