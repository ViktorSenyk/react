import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      toggle: 'Off',
    };
    }
    
    setToggle = () => this.setState({toggle: this.state.toggle === 'Off' ? 'On' : 'Off'})

  render() {
      return <div onClick={this.setToggle} className="toggler">{ this.state.toggle }</div>;
  }
}

export default Toggler;
