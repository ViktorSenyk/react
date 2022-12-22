import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    inputValue: '',
  };

  onChanger = (e) => this.setState({ inputValue: e.target.value });

  onSubmiter = (e) => {
    e.preventDefault();
      alert(`Search text: ${this.state.inputValue}`);
  };

  render = () => (
    <form className="search" onSubmit={this.onSubmiter}>
      <input
        type="text"
        className="search__input"
        onChange={this.onChanger}
        value={this.state.inputValue}
      />
      <button type="submit" className="search__button">
        Search
      </button>
    </form>
  );
}
