import React, { Component } from 'react';

export default class Filter extends Component {
  state = {
    filterText: this.props.filterText,
  };

  componentDidMount = () => this.props.onChange(this.state.filterText);

  localOnChanger = (e) => {
    this.setState({ filterText: e.target.value });
    this.props.onChange(e.target.value);
  };

  render = () => (
    <div className="filter">
      <span className="filter__count">{this.props.count}</span>
      <input
        type="text"
        className="filter__input"
        value={this.state.filterText}
        onChange={(e) => this.localOnChanger(e)}
      />
    </div>
  );
}
