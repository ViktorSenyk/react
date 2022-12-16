import React, { Component } from 'react';

export default class Spinner extends Component {
  render = () => (
    <span
      style={{ width: this.props.width, height: this.props.height }}
      className="spinner"
    ></span>
  );
}
