import React, { Component } from 'react';

export default class Mailbox extends Component {
  render = () => (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {this.props.unreadMessages.length > 0 && (
        <span className="mailbox__count">
          {this.props.unreadMessages.length}
        </span>
      )}
    </div>
  );
}
