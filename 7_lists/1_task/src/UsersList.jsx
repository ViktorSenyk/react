import React, { Component } from 'react';
import User from './User';

export default class UsersList extends Component {
  state = {
    sort: null,
  };

  setSort = () =>
    this.setState({ sort: this.state.sort === 'asc' ? 'desc' : 'asc' });

  render = () => {
    let sortList = this.state.sort
      ? this.props.users
          .slice()
          .sort((a, b) =>
            this.state.sort === 'asc' ? a.age - b.age : b.age - a.age
          )
      : this.props.users;

    return (
      <>
        <button className="btn" onClick={this.setSort}></button>
        <ul className="users">
          {sortList.map(({ id, age, name }) => (
            <User key={id} age={age} name={name} />
          ))}
        </ul>
      </>
    );
  };
}
