import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

export default class ShoppingCart extends Component {
  state = {
    cartItems: [
      { id: '1', name: 'iPad Pro', price: 799 },
      { id: '2', name: 'iPad', price: 501 },
      { id: '3', name: 'Iphone 11', price: 1000 },
    ],
  };
  render = () => (
    <div className="column">
      <CartTitle
        userName={this.props.userName}
        count={this.state.cartItems.length}
      />
      <ProductsList cartItems={this.state.cartItems} />
    </div>
  );
}
