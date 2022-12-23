import React, { Component } from 'react';

export default class ProductsList extends Component {
  render = () => (
    <div className="products">
      <ul className="products__list">
        {this.props.cartItems.map((item) => (
          <li className="products__list-item" key={item.id}>
            <span className="products__item-name">{item.name}</span>
            <span className="products__item-price">{`$${item.price}`}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">{`Total: $${this.props.cartItems.reduce(
        (acc, item) => acc + item.price,
        0
      )}`}</div>
    </div>
  );
}
