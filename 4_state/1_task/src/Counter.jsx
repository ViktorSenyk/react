import './counter.scss';
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: this.props.start,
    };
    setInterval(() => {
      this.setState({
        start: this.state.start + 1,
      });
    }, props.interval);
  }

  render() {
    return <div className="counter">{this.state.start}</div>;
  }
}

export default Counter;
