import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Product from './Product';

export default class Products extends Component {
  render = () => (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/products">
          <span>Select a product please</span>
        </Route>
        <Route path="/products/:productId">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}
