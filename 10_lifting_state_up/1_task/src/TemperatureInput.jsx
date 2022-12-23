import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default class TemperatureInput extends Component {
  handleChange = (e) => this.props.onTemperatureChange(e.target.value);

  render = () => (
    <fieldset>
      <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
      <input value={this.props.temperature} onChange={this.handleChange} />
    </fieldset>
  );
}
