import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contacts extends Component {
  render = () => (
    <div className="page__content">
      <h1>Contacts</h1>
      <p>We are here 🗺</p>
      <Link to="/">Go home</Link>
    </div>
  );
}
