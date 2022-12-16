import React, { Component } from 'react';
import NumbersList from './NumbersList';

export default class App extends Component {
  render = () => (
    <>
      <NumbersList numbers={[1, 2, 3, 4, 5]} />
    </>
  );
}
