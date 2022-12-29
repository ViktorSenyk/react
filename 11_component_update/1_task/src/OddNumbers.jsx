import React, { Component } from 'react';

export default class OddNumbers extends Component {
  shouldComponentUpdate = (nextProps) => nextProps.number % 2 === 1;

  render = () => (
    <div className="number">
      <span className="number__title">Odd Number</span>
      <span className="number__value">{this.props.number}</span>
    </div>
  );
}
