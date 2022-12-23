import React, { Component } from 'react';

export default class CartTitle extends Component {
  render = () => (
    <div className="cart-title">{`${this.props.userName}, you added ${this.props.count} items`}</div>
  );
}
