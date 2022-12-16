import React, { Component } from 'react';

export default class NumbersList extends Component {
  render = () => (
    <ul>
      {this.props.numbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}
