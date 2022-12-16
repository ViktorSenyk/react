import React, { Component } from 'react';
import moment from 'moment'

export default class Transaction extends Component {
  render = () => (
    <li className="transaction">
      <span className="transaction__date">
        {moment(this.props.time).format('D MMM')}
      </span>
      <span className="transaction__time">
        {moment(this.props.time).format('HH:mm')}
      </span>
      <span className="transaction__assets">
        {`${this.props.from} → ${this.props.to}`}
      </span>
      <span className="transaction__rate">{this.props.rate}</span>
      <span className="transaction__amount">
        {new Intl.NumberFormat('en-GB').format(this.props.amount)}
      </span>
    </li>
  );
}
