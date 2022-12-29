import React, { Component } from 'react';

export default class Dialog extends Component {
  render = () =>
    !this.props.isOpen ? null : (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{this.props.title}</h4>
          <button className="dialog__close-btn" onClick={this.props.onClose}>
            +
          </button>
        </div>
        <div className="dialog__content">{this.props.children}</div>
      </div>
    );
}
