import React, { Component } from 'react';

export default class EvenNumbers extends Component {
  shouldComponentUpdate = (nextProps) => nextProps.number % 2 === 0;

  render = () => (
    <div className="number">
      <span className="number__title">Even Number</span>
      <span className="number__value">{this.props.number}</span>
    </div>
  );
}
