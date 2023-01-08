import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  render = () => (
    <div className="page__content">
      <h1>Products</h1>
      <p>We will add some products. Later... 😇</p>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
}
