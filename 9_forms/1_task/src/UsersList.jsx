import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

export default class UsersList extends Component {
  state = {
    users: this.props.users,
    filterText: '',
  };

  onChange = (e) =>
    this.setState({
      users: this.props.users.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
      filterText: e.target.value,
    });

  render = () => (
    <>
      <Filter
        filterText={this.state.filterText}
        count={this.state.users.length}
        onChange={this.onChange}
      />
      <ul className="users">
        {this.state.users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
}
