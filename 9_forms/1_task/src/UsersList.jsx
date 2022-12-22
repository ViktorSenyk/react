import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

export default class UsersList extends Component {
  state = {
    users: this.props.users,
  };

  onChanger = (text) =>
    this.setState({
      users: this.props.users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      ),
    });

  render = () => (
    <>
      <Filter
        filterText="o"
        count={this.state.users.length}
        onChange={this.onChanger}
      />
      <ul className="users">
        {this.state.users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
}
