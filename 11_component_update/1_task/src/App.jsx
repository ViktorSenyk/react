import React, { Component } from 'react';
import Expand from './Expand';

export default class App extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render = () => (
    <>
      <Expand
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        title="Some title"
      >
        <p>
          Hooks are a new addition in React 16.8. They let you use state and
          other React features without writing a class.
        </p>
      </Expand>
    </>
  );
}
