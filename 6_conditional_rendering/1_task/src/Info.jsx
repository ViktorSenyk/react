import React, { Component } from 'react';

export default class Info extends Component {
  render = () =>
    // !this.props.info ? null : <div className="message">{this.props.info}</div>;
    !this.props.info ? null : <div className="info">{this.props.info}</div>;
}
