import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default class TemperatureInput extends Component {
  state = {
    temperature: '',
  };

  handleChange = (e) => this.setState({ temperature: e.target.value });

  render = () => (
    <fieldset>
      <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
      <input value={this.state.temperature} onChange={this.handleChange} />
    </fieldset>
  );
}
