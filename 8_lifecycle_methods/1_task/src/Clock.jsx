import React, { Component } from 'react';
import moment from 'moment';
import getTimeWithOffset from './testFunc';

export default class Clock extends Component {
  state = {
    time: getTimeWithOffset(this.props.offset),
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          time: getTimeWithOffset(this.props.offset),
        }),
      1000
    );
  }

  componentWillUnmount = () => clearInterval(this.interval);

  render = () => (
    <div className="clock">
      <div className="clock__location">{this.props.location}</div>
      <div className="clock__time">
        {moment(this.state.time).format('h:mm:ss A')}
      </div>
    </div>
  );
}
