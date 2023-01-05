import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render = () => (
    <div className="page__content">
      <h1>🏠</h1>
      <Link to="/products">To products</Link>
    </div>
  );
}
