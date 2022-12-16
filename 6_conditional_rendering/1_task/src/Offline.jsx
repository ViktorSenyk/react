import React, { Component } from 'react';

export default class Offline extends Component {
  render = () => (
    <>
      <span class="status__text">Offline</span>
      <button class="status__btn">Reconnect</button>
    </>
  );
}
