import React, { Component } from 'react';
import Info from './Info';

export default class Page extends Component {
  state = {
    info: '',
  };

  setInfo = (text) => this.setState({ info: text });

  render = () => (
    <div className="page">
      <Info info={this.state.info} />
      <div className="actions">
        <button
          className="btn"
          onClick={() =>
            // this.setInfo('Iphone 13 - Price is 500$. Available in 2 colors')
            this.setInfo('Price is 500$. Available in 2 colors')
          }
        >
          IPhone 13
        </button>
        <button
          className="btn"
          onClick={() =>
            // this.setInfo('Iphone 13 - Price is 650$. Not available')
            this.setInfo('Price is 650$. Not available in 1 color')
          }
        >
          IPhone 13 Pro
        </button>
        <button className="btn" onClick={() => this.setInfo('')}>
          Clear
        </button>
      </div>
    </div>
  );
}
