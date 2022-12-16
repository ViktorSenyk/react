import React, { Component } from 'react';
import Transaction from './Transaction';

export default class TransactionsList extends Component {
  render = () => {
    const copyTransactions = this.props.transactions.slice();
    return (
      <ul className="transactions">
        {copyTransactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    );
  };
}
