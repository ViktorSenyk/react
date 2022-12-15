import React, { Component } from 'react';

const coralColor = 'coral';
const aquaColor = 'aqua';
const bisqueColor = 'bisque';

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      colorName: '',
    };
  }

  setColorName = (colorName) => this.setState({ colorName: colorName });
  resetColorName = () => this.setState({ colorName: '' });

  render() {
    return (
      <>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            style={{ backgroundColor: coralColor }}
            onMouseEnter={() => this.setColorName(coralColor)}
            onMouseLeave={this.resetColorName}
            className="picker__button picker__button_coral"
          ></button>
          <button
            style={{ backgroundColor: aquaColor }}
            onMouseEnter={() => this.setColorName(aquaColor)}
            onMouseLeave={this.resetColorName}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            style={{ backgroundColor: bisqueColor }}
            onMouseEnter={() => this.setColorName(bisqueColor)}
            onMouseLeave={this.resetColorName}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </>
    );
  }
}

export default ColorPicker;
