import React, { Component } from 'react';

class GoodButton extends Component {
  clickFunc(e) {
    alert(e.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.clickFunc}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
