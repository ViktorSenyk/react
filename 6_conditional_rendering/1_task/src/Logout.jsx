import React, { Component } from 'react';

class Logout extends Component {
  render() {
    return (
      <button onClick={this.props.onLogout} className="btn logout">
        Logout
      </button>
    );
  }
}

export default Logout;
