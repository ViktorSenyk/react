import React, { Component } from 'react';

export default class Dimensions extends Component {
  state = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  };

  componentDidMount = () => {
    document.title = `${this.state.screenWidth} x ${this.state.screenHeight}`;

    window.addEventListener('resize', this.onResizeSet);
  };

  componentWillUnmount = () =>
    window.removeEventListener('resize', this.onResizeSet);

  onResizeSet = () => {
    document.title = `${this.state.screenWidth} x ${this.state.screenHeight}`;
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  };

  render = () => (
    <div className="dimensions">
      {`${this.state.screenWidth}px - ${this.state.screenHeight}px`}
    </div>
  );
}
