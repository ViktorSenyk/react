import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

export default class Status extends Component {
  render = () => (
    <div class="status">
      {this.props.isOnline ? <Online /> : <Offline />}
    </div>
  );
}
