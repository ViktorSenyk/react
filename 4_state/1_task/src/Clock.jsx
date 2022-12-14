import './clock.scss';
import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);

    const getTimeWithOffset = (offset) => {
      const currentTime = new Date();
      const utcOffset = currentTime.getTimezoneOffset() / 60;
      return new Date(
        currentTime.setHours(currentTime.getHours() + offset + utcOffset)
      );
    };

    this.state = {
      time: getTimeWithOffset(this.props.offset),
    };



    // setInterval(() => {
      // this.setState({
      //   time: getTimeWithOffset(this.props.offset),
      // });
    // }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {moment(this.state.time).format('h:mm:ss A')}
        </div>
      </div>
    );
  }
}

export default Clock;
