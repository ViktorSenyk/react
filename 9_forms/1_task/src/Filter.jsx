import React, { Component } from 'react';

export default class Filter extends Component {
  render = () => (
    <div className="filter">
      <span className="filter__count">{this.props.count}</span>
      <input
        type="text"
        className="filter__input"
        value={this.props.filterText}
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    </div>
  );
}
