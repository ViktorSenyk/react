import React, { Component } from 'react';

export default class Expand extends Component {
  render = () => (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{this.props.title}</span>
        <button className="expand__toggle-btn" onClick={this.props.toggle}>
          <i
            className={
              !this.props.isOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-up'
            }
          ></i>
        </button>
      </div>
      {!this.props.isOpen ? null : (
        <div className="expand__content">{this.props.children}</div>
      )}
    </div>
  );
}
