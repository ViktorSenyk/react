import React, { Component } from 'react';

export default class Expand extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render = () => (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{this.props.title}</span>
        <button className="expand__toggle-btn" onClick={this.toggle}>
          <i
            className={
              !this.state.isOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-up'
            }
          ></i>
        </button>
      </div>
      {!this.state.isOpen ? null : (
        <div className="expand__content">{this.props.children}</div>
      )}
    </div>
  );
}
