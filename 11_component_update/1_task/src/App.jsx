import React, { Component } from 'react';
import Dialog from './Dialog';

export default class App extends Component {
  state = { isOpen: false };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render = () => (
    <div className="app">
      <button className="btn" onClick={this.toggle}>
        Show dialog
      </button>
      <Dialog
        title="Recommendation"
        isOpen={this.state.isOpen}
        onClose={this.toggle}
      >
        <p>
          Use immutable array methods to work with data. It will help to avoid
          bugs
        </p>
      </Dialog>
    </div>
  );
}
