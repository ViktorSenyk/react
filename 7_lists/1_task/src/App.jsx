import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import transactions from './transactions';


export default class App extends Component {
  render = () => (
    <>
      <TransactionsList transactions={transactions} />
    </>
  );
}
