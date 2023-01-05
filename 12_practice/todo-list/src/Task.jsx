import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  render = () => (
    <li className={`list-item ${this.props.done ? `list-item_done` : ''}`}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={this.props.done}
        onChange={() => this.props.setDone(this.props.id)}
      />
      {this.props.text}
      <button
        className="list-item__delete-btn"
        onClick={() => this.props.onDelete(this.props.id)}
      />
    </li>
  );
}

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  setDone: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
Task.defaultProps = {
  text: '',
};
