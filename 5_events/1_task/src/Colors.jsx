import React, { Component } from 'react';

const redColor = 'red';
const greenColor = 'green';
const blueColor = 'blue';

class Colors extends Component {
  setBodyColor = (color) => (document.body.style.backgroundColor = color);

  render() {
    return (
      <>
        <button
          style={{ backgroundColor: redColor }}
          onClick={() => this.setBodyColor(redColor)}
          className="colors__button"
        ></button>
        <button
          style={{ backgroundColor: greenColor }}
          onClick={() => this.setBodyColor(greenColor)}
          className="colors__button"
        ></button>
        <button
          style={{ backgroundColor: blueColor }}
          onClick={() => this.setBodyColor(blueColor)}
          className="colors__button"
        ></button>
      </>
    );
  }
}

export default Colors;
