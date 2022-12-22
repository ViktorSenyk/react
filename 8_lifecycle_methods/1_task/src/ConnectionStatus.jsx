import React, { Component } from 'react';

export default class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount = () => {
    window.addEventListener('online', this.setOnline);
    window.addEventListener('offline', this.setOffline);
  };

  componentWillUnmount = () => {
    window.removeEventListener('online', this.setOnline);
    window.removeEventListener('offline', this.setOffline);
  };

  setOnline = () => this.setState({ status: 'online' });

  setOffline = () => this.setState({ status: 'offline' });

  render = () => (
    <div
      className={
        this.state.status === 'online' ? 'status' : 'status status_offline'
      }
    >
      {this.state.status}
    </div>
  );
}
