import React, { Component } from 'react';
import moment from 'moment';

export default class Clock extends Component {
  state = {
    time: null,
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          time: this.getTimeWithOffset(this.props.offset),
        }),
      1000
    );
  }

  componentWillUnmount = () => clearInterval(this.interval);

  getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
  };

  render = () => (
    <div className="clock">
      <div className="clock__location">{this.props.location}</div>
      <div className="clock__time">
        {moment(this.state.time).format('h:mm:ss A')}
      </div>
    </div>
  );
}
